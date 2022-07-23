## Summary

The goal of this test is to make you code a small ReactJS app. We have prepared a skeleton app for you, but please change whatever you want (CSS files, HTML structure, JS structure, etc).

The app will have two different components:
- **Activity ActivityFeed** - simple list of ActivityDetails
- **Activity Detail** - detail of a ActivityDetail
- **Archive** - the final user should be able to archive (and unarchive) a ActivityDetail. Archived ActivityDetails will no longer be displayed on the Activity ActivityFeed and should have a separate Archived Tab.

Show us what you can do in 24 hours. You will be assessed on the following parameters: 
- Focus on design (Pay attention to the UI/UX and transitions)
- Best React Practices
- Code Readability and Maintainability

## Submission
After you're done with the assignment, please submit a link to the **GitHub/Bitbucket repository** (make sure it's public) with your code **AND** a deployment link where our recruiters can interact with the live version. You can use freely available tools like **Netlify, Vercel, Heroku, etc** to deploy your React application.

**Note:** Submissions without a valid repository and deployment link will be removed from any further consideration.

To give you an idea, here's what our app looks like:


![app](https://user-images.githubusercontent.com/630714/29357034-763d7216-8276-11e7-8bcb-e77d9645dfcc.png)

## Installation

We're using [yarn](https://yarnpkg.com) here (but you can use npm):

```
yarn install
yarn start
```

## API documentation

### Routes

Here is the API address: https://airActivityDetail-job.herokuapp.com.

As you can see, it's hosted on a free Heroku server, which means that the first time you will fetch the API, it will take few seconds to answer.

- **GET** - https://airActivityDetail-job.herokuapp.com/activities: get ActivityDetails to display in the Activity ActivityFeed
- **GET** - https://airActivityDetail-job.herokuapp.com/activities/:id: retrieve a specific ActivityDetail details
- **POST** - https://airActivityDetail-job.herokuapp.com/activities/:id: update a ActivityDetail. The only field updatable is `is_archived (bool)`. You'll need to send a JSON in the request body:
```
{
  is_archived: true
}
```
- **GET** - https://airActivityDetail-job.herokuapp.com/reset: Reset all ActivityDetails to initial state (usefull if you archived all ActivityDetails).

### ActivityDetail object

- **id** - unique ID of ActivityDetail
- **created_at** - creation date
- **direction** - `inbound` or `outbound` ActivityDetail
- **from** - ActivityDetailer's number
- **to** - ActivityDetailee's number
- **via** - AirActivityDetail number used for the ActivityDetail
- **duration** - duration of a ActivityDetail (in seconds)
- **is_archived** - ActivityDetail is archived or not
- **ActivityDetail_type** - can be a `missed`, `answered` or `voicemail` ActivityDetail.
