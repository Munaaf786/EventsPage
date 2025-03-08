In this project, I have built an **Events** app by applying the concepts I have learned till now.

### Output is as per the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/events-output.gif" alt="events output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Large (Size >= 992px) and Extra Large (Size >= 1200px) - No Active Event](https://assets.ccbp.in/frontend/content/react-js/events-no-active-event-view-output.png)
- [Large (Size >= 992px) and Extra Large (Size >= 1200px) - Yet To Register](https://assets.ccbp.in/frontend/content/react-js/events-yet-to-register-view-output.png)
- [Large (Size >= 992px) and Extra Large (Size >= 1200px) - Registered](https://assets.ccbp.in/frontend/content/react-js/events-registered-view-output.png)
- [Large (Size >= 992px) and Extra Large (Size >= 1200px) - Registrations Closed](https://assets.ccbp.in/frontend/content/react-js/events-registrations-closed-view-output.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality added</summary>
<br/>

The app has the following functionalities

- Initially, the page has the [No Active Event View](https://assets.ccbp.in/frontend/content/react-js/events-no-active-event-view-output.png)
- When the image of an event item with `registrationStatus` as `YET_TO_REGISTER` is clicked, then the [Yet To Register View](https://assets.ccbp.in/frontend/content/react-js/events-yet-to-register-view-output.png) is displayed
- When the image of an event item with `registrationStatus` as `REGISTERED` is clicked, then the [Registered View](https://assets.ccbp.in/frontend/content/react-js/events-registered-view-output.png) is displayed
- When the image of an event item with `registrationStatus` as `REGISTRATIONS_CLOSED` is clicked, then the [Registrations Closed View](https://assets.ccbp.in/frontend/content/react-js/events-registrations-closed-view-output.png) is displayed

- The `Events` component is provided with `eventsList`. It consists of a list of event objects with the following properties in each event object

  |        Key         | Data Type |
  | :----------------: | :-------: |
  |         id         |  String   |
  |      imageUrl      |  String   |
  |        name        |  String   |
  |      location      |  String   |
  | registrationStatus |  String   |

</details>

<details>
<summary>Components Structure</summary>

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/events-compoment-structure-breakdown.png" alt="component structure breakdown" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

</details>

<details>
<summary>Implemented Files</summary>
<br/>

Used these files to complete the implementation:

- `src/components/Events/index.js`
- `src/components/Events/index.css`
- `src/components/EventItem/index.js`
- `src/components/EventItem/index.css`
- `src/components/ActiveEventRegistrationDetails/index.js`
- `src/components/ActiveEventRegistrationDetails/index.css`
</details>

### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/events-register-img.png](https://assets.ccbp.in/frontend/react-js/events-register-img.png) alt value is **yet to register**
- [https://assets.ccbp.in/frontend/react-js/events-regestered-img.png](https://assets.ccbp.in/frontend/react-js/events-regestered-img.png) alt value is **registered**
- [https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png](https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png) alt value is **registrations closed**

</details>

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #64748b; width: 150px; padding: 10px; color: white">Hex: #64748b</div>
<div style="background-color: #0967d2; width: 150px; padding: 10px; color: white">Hex: #0967d2</div>
<div style="background-color: #323f4b; width: 150px; padding: 10px; color: white">Hex: #323f4b</div>
<div style="background-color: #f8fafc; width: 150px; padding: 10px; color: black">Hex: #f8fafc</div>
<div style="background-color: #475569; width: 150px; padding: 10px; color: white">Hex: #475569</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #2dd4bf; width: 150px; padding: 10px; color: black">Hex: #2dd4bf</div>
<div style="background-color: #3a4b63; width: 150px; padding: 10px; color: white">Hex: #3a4b63</div>
<br/>
</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>

## Conclusion

🚀 The Events App dynamically updates the UI based on user interactions, showcasing React.js skills like state management, props handling, and component-based design. 🎯 With an intuitive layout and smooth experience, With a clean design and seamless functionality, it delivers an engaging user experience! 💡🔥
