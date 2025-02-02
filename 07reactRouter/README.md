# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


MY_NOTES 
1. we should not use the a tag beacuse it loads the full page which degrades the working of the react.Instead of which we use the Link 

2. HOw to make routes 40:59 in video  -for using this user when we add /user/id on the address then that user come but we have to do work so that that user/1 and user/200 would have diff data that's all the work.

3. we use useParams to make the data to come for the different userids we are using

4. to take these data like followers from the API's we have to study them like in github api there is key with the follower name so are directley taking the values.

5. we also use loader to directly fetch the data from the api call, when our cursor is on the option then only it will start the fetching and keep it in the cache it is more faster then the useEffect. To see how loader works then see reactrouter video and see after 53 mins, ihave not done this is the project.
We use the useLoader data hook. this is more optimised way