FROM cypress/browsers:node14.17.0-chrome91-ff89

RUN mkdir /my-cypress-project-rain

WORKDIR /my-cypress-project-rain

COPY ./package.json .
COPY ./cypress.json .
COPY ./cypress ./cypress

RUN npm install
RUN npx cypress run --browser chrome --no-exit

ENTRYPOINT [ "npx", 'cypress', "run"]

CMD [""]