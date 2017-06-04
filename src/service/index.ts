
import { ManagementService } from './management.service';
import { AppsService } from '../components/apps/apps.service';
import { ExtendsService } from '../components/extends/extends.service';
import { HistoryService } from '../components/history/history.service';

export default [
  ManagementService,
  AppsService,
  ExtendsService,
  HistoryService
]

export {
  ManagementService
};
