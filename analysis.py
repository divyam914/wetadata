import dateutil
import matplotlib.pyplot as plt
import pandas as pd
import datetime
import requests
from PIL import Image
from io import BytesIO
import json

sampleData = {"charity1": [[40.750328, -73.994471],[40.751465, -73.994263]], "charity2": [[40.751489, -73.993700]]}
charityToLetter = {"charity1": "A", "charity2":"B"}


# add in exponential backoff at some point: https://developers.google.com/maps/web-services/overview#BuildingURLs
def generateMap(jsonData):
    #apparently we don't need this but i left it in here anyway just in case
    #key = 'AIzaSyCSk-syVWVKpl0tfDfu9Hz8zIEtaPQD4Hc'
    baseURL = "https://maps.googleapis.com/maps/api/staticmap?"
    size = '600x600'
    markersDict = json.loads(jsonData)

    #construct the URL:
    baseURL += "&size=" + size
    #baseURL += "&key=" + key


    #loop through markersDict, adding to baseURL
    keys = markersDict.keys()

    for charity in keys:
        print("adding " + charity + " to the URL")
        #loop through all that charity's coordinates, adding each to the URL
        for index in range(len(markersDict[charity])):
            baseURL += "&markers=label:" + charityToLetter[charity] + "|" + str(markersDict[charity][index][0]) + "," + str(markersDict[charity][index][1])

    print "sending request with " + baseURL
    response = requests.get(baseURL, stream=True)
    print response

    #create and save the image
    response.raw.decode_content = True
    im = Image.open(response.raw)
    #im.save("map.pdf")
    return im


def generateGraphs(jsonData):
    #make json into dictionary
    dictFromJSON = json.loads(jsonData)[0]
    #create a DataFrame from the dictionary
    df = pd.DataFrame.from_dict(data=dictFromJSON, orient='index')
    graph = df.plot()
    graph.set_title("Collected Data")
    graph.set_xlabel("idk")
    graph.set_ylabel("idk")
    fig = graph.get_figure()
    #fig.savefig("analysis.pdf")
    return fig
