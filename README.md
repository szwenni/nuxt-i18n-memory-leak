# Nuxt i18n memory leak

1. Start the project with ```npm build && npm start```
2. Go to chrome://inspect/#devices, wait until the node process pops up and press inspect
3. Go to memory tab an start profiling with "Allocation instrumentation on timeline"
4. Go to localhost:3000, reload with ctrl+r (cmd+r on mac)
5. Go to localhost:3000/b, go to localhost:3000/en/, go to localhost:3000/en/ and hit hit ctrl+r (cmd+r on mac) on each page at least once
6. Go back to the profiling window, stop profiling and wait until the profling entry is created
7. Sort the entries after "Shallow Size" in descending order
8. Open the ```(array)``` entries
9. You should see a bunch of ```(object properties)[]``` with the same size and the same content (content of the translation files in public/translations/....json)

The same can be tried with deactivating ```asyncContext``` in ```nuxt.config.js```