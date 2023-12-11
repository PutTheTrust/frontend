# Accenture Frontend developer challenge

![Screenshot of solution](https://github.com/PutTheTrust/frontend-dev-challenge/blob/main/images/Screenshot.png?raw=true)

## How To Run

1. Clone or Download The Project
1. Navigate into the directory
1. In your terminal run the following
1. `npm install` This will install the required dependencies
1. `npm run start` This will run the app in the development mode. Open [http://localhost:5173](http://localhost:5173/) to view it in the browser.

# Folder Structure

**src**\
&ensp;components\
&ensp;&ensp;FCButton\
&ensp;&ensp;Footer\
&ensp;&ensp;Header\
&ensp;&ensp;Title

&ensp;**pages**\
&ensp;&ensp;Home\
&ensp;&ensp;&ensp;AboutSection\
&ensp;&ensp;&ensp;&ensp;AboutSectionCard\
&ensp;&ensp;&ensp;&ensp;AboutSectionItems\
&ensp;&ensp;&ensp;Brand\
&ensp;&ensp;&ensp;CaseStudies\
&ensp;&ensp;&ensp;&ensp;CaseStudiesCard\
&ensp;&ensp;&ensp;Hero

# Description of components and pages

#### Components

- FCButton -> CTA button used on header and hero
- Footer -> Website footer
- Header -> Website Header
- Title -> Title with pink dash before text
- AboutSection -> Renders the about title, about heading and items
- AboutCard -> Reusable card component used to display a service offered
- AboutSectionItems -> Loops through all available services offered and displays the cards
- Brand -> Displays the trusted leading brands
- Case Studies -> Makes an API request to retrieve case studies and displays them
- CaseStudyCard -> Reusable card component used to display a case study
- Hero -> Displays the hero

#### Pages

- Home -> Landing page of the website
- Components:
- AboutSection

# Thought Process

## Pages

### Home

I prefer keeping pages as clean as posible in this case the home page is only responsible for displaying the various components it needs.

## Components

### FCButton

- The reason I created this component in this way is so that it can be reused across the whole website and not having to create a new button everytime we need it.

### Footer

- We have one page on the design but incase the website needs to be scaled up in the future the footer component can easily be reused.

### Header

- Similar to the footer multiple pages might need a header. Instead of creating it directly in the home page I made a component so that it is reusable.
  - Mobile Sidebar is the component responsible for displaying mobile nav links. The reason I separated it out into it's own component is to ensure that the Header component doesn't have too many lines of code

### Title

- The title with a pink line is used multiple times on the home page so making it reusable prevents me from having to duplicate it

### Hero

- The hero component is responsible for displaying the hero section. The reason I have as a component is Hero's can become complex when the become carousels and will require more code.

### Brand

- The Brand component is responsible for displaying the trusted brands. I separated this out that incase it needs to be used in a different page such as about it does not need to be duplicated.

### About Section

- About component is resposible for displaying the about section which has a title, and list of services. The reason this is separated out is because it can also be used in the services page.

### Case Studies

- Case Studies component requires a lot of code and an API request so separting this our ensures that the Home page won't have too much code in it. If this was a next js projecxt this approach would allow the Home page to be server side rendered.
