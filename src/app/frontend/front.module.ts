/**
 * Created by hgeorgiev on 9/26/16.
 */
import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import {PaginationModule, CarouselModule} from "ng2-bootstrap/ng2-bootstrap";
import {FrontApplicationTemplates} from "./applications/application_templates.component";
import {FrontClubs} from "./clubs/clubs.component";
import {FrontNews} from "./home/news/news.component";
import {NewsCarousel} from "./home/carousel/carousel.component"
import {FrontPostDetail} from "./posts/post-detail.component";
import {FrontProfessors} from "./evaluations/evaluations.component";
import {FrontTeamMembers} from "./team_members/team_members.component";
import {FrontInternships} from "./internships/internships.component";
import {routing} from "./front.routing";
import {FrontNavbar} from "./shared/navbar/navbar.component";
import {NewApplicationSubmission} from "./applications/new-application/new_application_submission.component";
import {SharedModule} from "../shared/shared.module";
import {Home} from "./home/home.component";
import {ProfessorDetailComponent} from "./evaluations/professor/professor-detail/professor-detail.component";
import {ProfessorEvaluationsComponent} from "./evaluations/professor/professor-evaluations/professor-evaluations.component";
import {HomeFooter} from "./shared/footer/footer.component";
import {FrontClubDetail} from "./clubs/club-detail/club-detail.component";
import {FrontHeader} from "./shared/header/header.component";

import {NewProfessorEvaluation} from "./evaluations/professor/professor-evaluations/new-professor-evaluation.component";
import {FrontPostPhoto} from "./posts/post-image/post-photo.component";
import {FrontPostContent} from "./posts/post-content/post-content.component";
import {BreadcrumbComponent} from "./shared/breadcrumbs/breadcrumbs.component";
import {RouterModule} from "@angular/router";







@NgModule({
    imports: [CommonModule , RouterModule,PaginationModule, routing, SharedModule, CarouselModule],
    declarations: [
        Home,
        FrontApplicationTemplates, 
        FrontClubs,
        FrontNews,
        NewsCarousel,
        FrontPostDetail,
        FrontProfessors,
        FrontTeamMembers,
        FrontInternships,
        FrontNavbar,
        NewApplicationSubmission,
        ProfessorDetailComponent,
        ProfessorEvaluationsComponent,
        HomeFooter,
        FrontHeader,
        FrontClubDetail,
        BreadcrumbComponent,
        NewProfessorEvaluation,
        FrontPostPhoto,
        FrontPostContent,

        ],
})

export class FrontModule {}