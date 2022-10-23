# Rijks museum web app
Rijks Museum Search app

This is a web app which fetches the art objects from the Rijks museum api and shows all of them. On the details page you can see the details for each artifacts invidually. The items can be also searched through a search and filter on the index. It also shows both the NL and EN version and the corresponding art details.


### Frontend
Create React App has been used for frontend. The application is full responsive and components are modular to manage easily.

### Backend
Express JS has been used as the framework for NodeJS. It is being used to fetch the data from the rijks museum api and to switch language and routes.

### Caching
Caching has been done using Redis. The config for Redis on Docker compose file can be found in ./backend/config/config.js
A teomporary server has been used to cache all the results.

### Loadash
Loadash has been implemented in the frontend to search and filter through all the artifacts.

## Screenshots of the app

#### Homepage (NL version):
<img width="1708" alt="image" src="https://user-images.githubusercontent.com/34316105/197410347-ee1e7984-077b-4638-82d2-fe839e85bf9b.png">

#### Homepage (EN Version):
<img width="1710" alt="image" src="https://user-images.githubusercontent.com/34316105/197410396-d7f1594c-f794-40e0-962a-5829435dc67c.png">

#### Art object details page (Option to choose language):
<img width="1709" alt="image" src="https://user-images.githubusercontent.com/34316105/197410466-f4a721fa-ab29-4743-98ec-8890c9504655.png">
