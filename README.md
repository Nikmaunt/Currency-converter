**Currency converter application**

**********
Tech stack:

* Language: *TypeScript/JavaScript*
* Frontend: *React.js*
* Backend: *Express.js*
* Database: *Firebase*

**********
**Basic:**

* Use a public github repository.
* Public github repository must have README.MD with information about the test task,
  running steps, link to demo.
* Demo should be deployed to one of the following services: DigitalOcean, GCP, AZURE,
  AWS, Github actions, **Heroku, Netlify**
**********
**Behavioral:**

After loading the main page there should be displayed the list of currencies (USD, EUR,
RUB, BYN) with values relative to the US dollar.

As you enter value into one of the fields, the others must be recalculated in real time in
accordance with the entered value. There should be a button “Add currency” to add any
currency from the list.
**********
**Functional:**

* Design the application at your own discretion, but if you have no ideas for layout , take
  https://myfin.by/converter as an example. Note that it should be rendered properly on
  any device including mobile phones and it should have a user friendly interface.
* It should be possible to add / remove any currency from those presented in the selected
  banking API. When you click on the “add currency” button, you need to add a new input
  field with the converted value of the selected currency.
* All calculations should proceed on the server side, the frontend app should only be in
  charge of rendering data.
**********
**Assessment criteria:**

* Layout should be adaptive and fit any screen.
* There shouldn’t be glitches(screen/component “jumps” and ect) when you adding /
  removing new currency
* All page elements should be scalable in accordance with the current device screen
  width.
* Semantic tags should be used
* Api calls shouldn't throttle your application.
* All data related to API calls to third party services , configurations and ect should be
  stored in environment files.
* The application must have a clear file structure (services, dtos, schemas ect should be
  placed in separate folders and had clear names)
* All incoming requests should be validated
* All values that used for calculations, checks and ect should be constants
* If you are using TypeScript all variables, components, requests, responses and ect
  should be typed.
* The application must be error-tolerant( It shouldn’t crash if something went wrong)
* The application should be informative( In case of error it should show the reason)
**********
**User guide**:
1. Download the repository and open it in your preferred code editor.
2. Change the directory in your console to the project folder.
3. Install all project dependencies and modules using npm install.
4. Then in console write next command to start program in live server. `npm start`
5. Open your web browser and enter the following URL: `http://localhost:3000/` or it will open automatically
6. Enjoy using the Currency Converter Application!
**********

