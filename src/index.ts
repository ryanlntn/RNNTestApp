import { Navigation } from "react-native-navigation"
import App from "./screens/start"
import { Calendar } from "./screens"

Navigation.registerComponent("infinifit", () => App)
Navigation.registerComponent("calendar", () => Calendar)
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    topBar: {
      background: {
        color: "white",
        translucent: true,
        blur: false,
      },
      backButton: {
        color: "blue",
        showTitle: false,
      },
      drawBehind: true,
      elevation: 0,
      title: {
        fontSize: 18,
        color: "black",
        fontFamily: "Helvetica",
      },
    },
  })

  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: "calendar",
                    options: {
                      bottomTab: {
                        text: "Calendar",
                        testID: "Calendar",
                      },
                    },
                  },
                },
              ],
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: "infinifit",
                    options: {
                      bottomTab: {
                        text: "Start",
                        testID: "Start",
                      },
                    },
                  },
                },
              ],
            },
          },
        ],
      },
    },
  })
})
