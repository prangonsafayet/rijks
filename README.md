# rijks
Rijks Museum Search app

This is an react app which fetches the art objects from the Rijks museum api and shows all of them. On the details page you can see the details for each artifacts invidually. The items can be also searched through a search and filter on the index. It also shows both the NL and EN version and the corresponding art details.


##Frontend
Create React App has been used for frontend

##Backend
Express JS has been used as the framework for NodeJS

##Caching
Caching has been done using Redis. The config for Redis on Docker compose file can be found in ./backend/config/config.js
A teomporary server has been used to cache all the results.

##Loadash
Loadash has been implemented in the frontend to search and filter through all the artifacts.
