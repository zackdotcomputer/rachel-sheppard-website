import { SiteSettings } from "./SiteSettings";
import { SiteSettingsActions } from "./SiteSettingsActions";

export type SiteContext = {
  state: SiteSettings;
  dispatch: React.Dispatch<SiteSettingsActions>;
};
