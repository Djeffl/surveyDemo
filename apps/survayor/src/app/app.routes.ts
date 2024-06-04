import { Route } from '@angular/router';
import { surveyTakerRoutes } from '@gui/survey-taker';

export const appRoutes: Route[] = [
  { path: 'survey', children: surveyTakerRoutes },
];
