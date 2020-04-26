export interface SetPageTitleAction {
  type: "SetPageTitleAction";
  newValue: string | null;
}

export const setPageTitle = (newValue: string): SetPageTitleAction => ({
  type: "SetPageTitleAction",
  newValue
});

export interface SetPageDescriptionAction {
  type: "SetPageDescriptionAction";
  newValue: string | null;
}

export const setPageDescription = (newValue: string): SetPageDescriptionAction => ({
  type: "SetPageDescriptionAction",
  newValue
});

export type SiteSettingsActions = SetPageTitleAction | SetPageDescriptionAction;
