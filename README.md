##URL Shortener Service
A backend service for generating and resolving short URLs, designed with scalability, performance, and clean architecture in mind.

##Overview

1. Designed and implemented a URL shortening backend service
2. Built RESTful APIs to create, resolve, and manage short URLs
3. Used Base62 encoding for short URL generation
4. Used database indexing to optimize URL lookup performance
5. Designed the system to support billions of short links
6. Leveraged Redis atomic counters (INCR) for concurrency-safe ID generation
7. Implemented read-through caching using Redis to reduce database hits and improve response time
8. Followed clean architecture with controllers, services, and repositories
9. Added input validation, error handling, and proper HTTP status codes

## API Endpoints

- **POST** `/`  
  Create a new short URL

- **GET** `/`  
  Retrieve all shortened URLs

- **GET** `/:shortCode`  
  Redirect to the original URL

- **GET** `/urlStats/:shortCode`  
  Fetch usage statistics for a short URL


## Steps to setup the starter template

1. Clone the project

```
git clone https://github.com/Vivan1133/URL_SHORTNER.git <ProjectName>
```

2. Move in to the folder structure

```
cd <ProjectName>
```

3. Install npm dependencies

```
npm i
```

4. Create a new .env file in the root directory and add the `PORT` env variable

```
echo PORT=3000 >> .env
```

5. Start the express server

```
npm run dev
```
