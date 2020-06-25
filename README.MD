# Description

This is a demo to set up a streaming app with Azure Media Services, OBS and React Native

# SetUp

## Step 1 : Create media service

* Create a new media services resource
* Fill form
* Create

## Step 2 : Create Channel

* Go to Live streaming in Media service resource menu
* Create Channel
* Set Encoding Type : Live Encoding
* Set a Name and a description
* Choose rtmp as streaming protocol
* After leave as default then Click Ok


## Step 3 : Create a Live Event

* Go to channel
* Click Go live
* Start Live

## Step 4 : Config project

* Copy .env.example and rename it to .env
* Set the LIVE_URL with the HLS(v4) url

## Step 5 : Setup OBS

* Go to the channel
* Copy Ingest URL (Primary)
* Paste it in OBS stream settings server
* Stream key => default
* Run the stream from obs

## Final Step : Run the mobile application
