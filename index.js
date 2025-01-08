// Good luck!
const express = require('express')
const app = express()

const animalData = {
    "animals" : [
      {
        "name": "African Elephant",
        "species": "Loxodonta africana",
        "description": "The African elephant is the largest land mammal, known for its large ears and tusks. These elephants are herbivores and have a complex social structure, often living in groups led by an elder female.",
        "habitat": "Savanna, forests, and grasslands across sub-Saharan Africa.",
        "diet": "Herbivorous (grasses, fruits, bark).",
        "conservation_status": "Vulnerable"
      },
      {
        "name": "Polar Bear",
        "species": "Ursus maritimus",
        "description": "Polar bears are large carnivorous bears found in the Arctic. They are specially adapted to cold environments, with thick fur and a layer of fat for insulation.",
        "habitat": "Arctic region, particularly along the coasts and sea ice.",
        "diet": "Carnivorous (primarily seals).",
        "conservation_status": "Vulnerable"
      },
      {
        "name": "Green Sea Turtle",
        "species": "Chelonia mydas",
        "description": "Green sea turtles are marine reptiles known for their large size and long lifespan. They spend most of their lives in the ocean but return to beaches to lay their eggs.",
        "habitat": "Warm ocean waters, coastal reefs, and beaches.",
        "diet": "Herbivorous (seagrasses and algae).",
        "conservation_status": "Endangered"
      },
      {
        "name": "Giraffe",
        "species": "Giraffa camelopardalis",
        "description": "Giraffes are the tallest land animals, known for their long necks and spotted coats. They are herbivores and use their height to feed on leaves from tall trees.",
        "habitat": "Open woodlands and savannas of sub-Saharan Africa.",
        "diet": "Herbivorous (leaves, fruits, and flowers from trees).",
        "conservation_status": "Vulnerable"
      },
      {
        "name": "Bengal Tiger",
        "species": "Panthera tigris tigris",
        "description": "The Bengal tiger is a subspecies of tiger found primarily in India. Tigers are solitary animals and are apex predators in their ecosystems.",
        "habitat": "Tropical forests, mangroves, and grasslands in India, Bangladesh, and Nepal.",
        "diet": "Carnivorous (deer, wild boar, and smaller mammals).",
        "conservation_status": "Endangered"
      },
      {
        "name": "Red Kangaroo",
        "species": "Macropus rufus",
        "description": "Red kangaroos are the largest marsupials in the world, known for their powerful hind legs and long tails. They live in large groups called mobs.",
        "habitat": "Deserts, grasslands, and open woodlands in Australia.",
        "diet": "Herbivorous (grasses, leaves, and shrubs).",
        "conservation_status": "Least Concern"
      }
    ],
    "habitats": [
      {
        "name": "Savanna",
        "description": "Savannas are tropical or subtropical grasslands with scattered trees. They are found in regions such as Africa, Australia, and parts of South America. These habitats support a wide range of herbivores, carnivores, and omnivores.",
        "characteristics": [
          "Seasonal rainfall",
          "Wide open spaces",
          "Scattered trees and shrubs"
        ],
        "typical_animals": ["African Elephant", "Giraffe", "Lion", "Zebra"]
      },
      {
        "name": "Arctic Tundra",
        "description": "The Arctic tundra is a cold, treeless biome found near the North Pole. It is characterized by low temperatures, low precipitation, and permafrost.",
        "characteristics": [
          "Cold temperatures",
          "Short growing seasons",
          "Permafrost"
        ],
        "typical_animals": ["Polar Bear", "Arctic Fox", "Snowy Owl"]
      },
      {
        "name": "Coral Reefs",
        "description": "Coral reefs are diverse underwater ecosystems found in warm ocean waters. They are made up of colonies of tiny coral polyps and support a wide variety of marine species.",
        "characteristics": [
          "Warm, clear waters",
          "High biodiversity",
          "Sensitive to temperature changes"
        ],
        "typical_animals": ["Green Sea Turtle", "Clownfish", "Sharks"]
      },
      {
        "name": "Tropical Rainforest",
        "description": "Tropical rainforests are dense, warm, and wet forests found near the equator. They are home to more species than any other terrestrial habitat.",
        "characteristics": [
          "High humidity",
          "Year-round warmth",
          "Tall trees and dense undergrowth"
        ],
        "typical_animals": ["Bengal Tiger", "Howler Monkey", "Parrot"]
      },
      {
        "name": "Desert",
        "description": "Deserts are arid environments characterized by low precipitation. They are often hot during the day and cold at night.",
        "characteristics": [
          "Low rainfall",
          "Extreme temperature fluctuations",
          "Sparse vegetation"
        ],
        "typical_animals": ["Red Kangaroo", "Fennec Fox", "Dromedary Camel"]
      }
    ]
  }
  app.use((request, response, next) =>{
    console.log(request.method + "" + request.url)
    next()
  })
  app.get("/", (request, response) =>{
    response.send("<h1>Welcome to the Animal Information Page!</h1><h2>Access the /docs page to know where to navigate in order to view some information!</h2>")
  })
  app.get("/api/animals", (request, response) =>{
    response.status(200).json(animalData.animals)
  })
  app.get("/api/habitats", (request, response) =>{
    response.status(200).json(animalData.habitats)
  })
  app.get("/docs", (request, response) =>{
    response.send("Go to /api/animals to see information about animals and /api/habitats to see information about their habitats")
  })
  app.use((request, response, next) =>{
    response.status(404).send("404 Not Found")
    next()
  })
  app.listen(3000, () =>{
    console.log("Server running")
  })