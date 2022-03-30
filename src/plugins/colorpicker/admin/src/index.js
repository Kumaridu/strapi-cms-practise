import { prefixPluginTranslations } from "@strapi/helper-plugin";
import ColorPicker from "./pages/HomePage/index";
import pluginPkg from "../../package.json";
import pluginId from "./pluginId";
import Initializer from "./components/Initializer";
import PluginIcon from "./components/PluginIcon";

const name = pluginPkg.strapi.name;

export default {
  register(app) {
    app.addFields({ type: "colorpicker", Component: ColorPicker });

    app.registerPlugin({
      id: pluginId,
      initializer: Initializer,
      isReady: false,
      name,
    });
  },
  bootstrap() {},
};
