# CSS Layouts

I can't seem to set up the design of my website correctly. 

I've created 3 placeholder elements for the top nav, main content and a side bar with their
appropriate class names however they all just stack on top of each other.

Using (preferably) CSS grid or any other method, modify `src/main.css` so that:

1) The top navigation bar should take the full width of the page and be the first element seen
2) The side bar sits next to the main content
3) The side bar takes up a maximum of 150px width and 20% width in all other cases
4) The main content takes up the rest of the available width next to the side bar
3) Both the main content and side bar take the rest of the browser height available

It should look similar to the following:

┌─────────────────────────────────────────────────────────────┐
│                       main navigation                       │
├────────────────┬────────────────────────────────────────────┤
│                │                                            │
│                │                                            │
│                │                                            │
│                │                                            │
│                │                                            │
│                │                                            │
│    sidebar     │                  content                   │
│                │                                            │
│                │                                            │
│                │                                            │
│                │                                            │
│                │                                            │
│                │                                            │
│                │                                            │
│                │                                            │
└────────────────┴────────────────────────────────────────────┘

Can you explain how else we could achieve this layout?

## Viewing the site

Preview URL is printed in the terminal.

