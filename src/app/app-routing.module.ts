import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "topics",
    loadChildren: () =>
      import("./topics/topics.module").then((m) => m.TopicsPageModule),
  },
  {
    path: 'activities',
    loadChildren: () => import('./activities/activities.module').then( m => m.ActivitiesPageModule)
  },
  {
    path: 'songs',
    loadChildren: () => import('./songs/songs.module').then( m => m.SongsPageModule)
  },
  {
    path: 'stories',
    loadChildren: () => import('./stories/stories.module').then( m => m.StoriesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}