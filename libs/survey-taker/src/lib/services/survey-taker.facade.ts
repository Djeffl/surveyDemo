import { Injectable } from '@angular/core';
import { SurveyType } from 'libs/survey-taker/src/lib/models';

@Injectable()
export class SurveyTakerFacade {
  getSurveyByType = (type: SurveyType) => {
    return {
      elements: [
        {
          name: 'FirstName',
          title: 'Enter your first name:',
          type: 'text',
        },
        {
          name: 'LastName',
          title: 'Enter your last name:',
          type: 'text',
        },
      ],
    };
  };
}
