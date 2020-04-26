import { createContext, useReducer } from "react";
import { SiteContext } from "./SiteSettingsContext";
import { SiteSettings } from "./SiteSettings";
import { SiteSettingsActions } from "./SiteSettingsActions";

import { attributes, react } from "../../content/siteconfig.md";

const siteConfig = attributes as SiteSettings;
siteConfig.title = siteConfig.title ?? "Untitled";
siteConfig.siteTitle = siteConfig.title;
siteConfig.footer = react;

function reducer(state: SiteSettings, action: SiteSettingsActions): SiteSettings {
  if (action.type === "SetPageTitleAction") {
    const newTitle = action.newValue ? `${action.newValue} | ${state.siteTitle}` : state.siteTitle;
    return { ...state, title: newTitle };
  } else if (action.type === "SetPageDescriptionAction") {
    return {
      ...state,
      description: action.newValue ?? undefined
    };
  } else {
    return state;
  }
}

export const useSiteContextValues = () => {
  const [state, dispatch] = useReducer(reducer, siteConfig);
  return { dispatch, state };
};

export default createContext<Partial<SiteContext>>({});
