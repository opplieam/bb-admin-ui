import { notifications } from "@mantine/notifications";

export enum NotiStyle {
  default = 0,
  blue = 1,
  red = 2
}

function ShowNotification(style: NotiStyle, title: string, message: string) {
  switch (style) {
    case NotiStyle.red:
      // noinspection TypeScriptValidateTypes
      notifications.show({
        title: title,
        message: message,
        color: "white",
        styles: theme => ({
          title: { color: theme.white },
          description: { color: theme.white }
        }),
        style: { backgroundColor: "red" },
        withBorder: true
      });
      break;

    case NotiStyle.default:
      notifications.show({
        title: title,
        message: message,
        withBorder: true
      });
      break;

    case NotiStyle.blue:
      // noinspection TypeScriptValidateTypes
      notifications.show({
        title: title,
        message: message,
        color: "white",
        styles: theme => ({
          title: { color: theme.white },
          description: { color: theme.white }
        }),
        style: { backgroundColor: "blue" },
        withBorder: true
      });
      break;
  }
}

export default ShowNotification;
