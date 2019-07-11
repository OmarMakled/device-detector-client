## Device Detector microservice Client.

# Install

```
git clone git@github.com:OmarMakled/device-detector-client.git
cd device-detector-client
docker run --rm -v "$PWD":/app -w /app node:alpine sh -c 'yarn install && yarn run build'
docker-compose up
```

# Run

http://localhost:8000/
