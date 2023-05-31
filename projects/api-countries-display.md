---
title: API Countries Display
excerpt: A filterable display for country data obtained from an API.
img: /images/country-api.jpg
imgPlaceholder: A screenshot of the country display interface.
liveSite: https://reinerb.github.io/fem-country-api/#/
github: https://github.com/reinerb/fem-country-api
tags:
  - React
  - CSS
  - API
---

I completed a [challenge through FrontEndMentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca) to build an application that queries the [REST Countries API](https://restcountries.com/) and displays the information found there.

The application queries the API and stores all country information in state. It uses country codes to generate dynamic routes that display more detail on each country. The list is searchable by country name, and filterable by region.

The site has a color mode switcher that is tracked through state. The user’s preference is stored in local storage.

## Technologies Used

- CSS, including flexbox and grid
- React
- `react-router`
- API queries through `axios`

## Things I learned

- How to use routes in `react-router`.
- How to store information in local storage in React.
- How to query information from APIs and effectively display it.
