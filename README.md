# stuff-monolith

Bob is dude who has a closet full of stuff. He needs a way to keep track of his stuff.

## Story 1: Bob can see what's in his closet
### Narrative
```
As Bob, 
I want to see a list of my stuff
so that I know what's in my closet
```

### Acceptance Critera
```
Given that Bob has a lamp, a sweatshirt, and a kakapo in his closet
When he visits the app
Then he sees a lamp, a sweatshirt, and a kakapo listed
```

**Note: The aim of this story is to get the front end communicating with the backend

## Story 2: Bob can put things in his closet
### Narrative
```
As Bob, 
I want to be able to put things into my closet
so that I can store new stuff I acquire 
```

### Acceptance Criteria
```
When Bob enters an item name and clicks "put in closet"
Then he sees that new item reflected in the list of stuff
```

**Note: The aim of this story is to introduce a domain object as well as a drive out the service and data layers


### Chore: Data Persistence
We don't want to lose the content of a closet just because the app needed to restart, so let's introduce some data persistence by replacing our H2 database with a Postgres database.

