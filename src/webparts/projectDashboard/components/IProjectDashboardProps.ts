export interface IProjectDashboardProps {
import { WebPartContext } from '@microsoft/sp-webpart-base';
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  context: WebPartContext;
}
