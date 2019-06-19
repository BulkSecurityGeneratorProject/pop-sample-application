import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'region',
        loadChildren: './region/region.module#PopSampleApplicationRegionModule'
      },
      {
        path: 'country',
        loadChildren: './country/country.module#PopSampleApplicationCountryModule'
      },
      {
        path: 'location',
        loadChildren: './location/location.module#PopSampleApplicationLocationModule'
      },
      {
        path: 'department',
        loadChildren: './department/department.module#PopSampleApplicationDepartmentModule'
      },
      {
        path: 'task',
        loadChildren: './task/task.module#PopSampleApplicationTaskModule'
      },
      {
        path: 'employee',
        loadChildren: './employee/employee.module#PopSampleApplicationEmployeeModule'
      },
      {
        path: 'job',
        loadChildren: './job/job.module#PopSampleApplicationJobModule'
      },
      {
        path: 'job-history',
        loadChildren: './job-history/job-history.module#PopSampleApplicationJobHistoryModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PopSampleApplicationEntityModule {}
