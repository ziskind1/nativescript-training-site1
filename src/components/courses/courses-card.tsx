import * as React from 'react';
import { Course } from '../../domain/models';
import { courseUrlFromId } from '../../util/urls';

interface CoursesCardProps {
  course: Course;
}

export const CoursesCard: React.StatelessComponent<CoursesCardProps> = (
  props: CoursesCardProps
) => {
  const course = props.course;

  return (
    <div className="col-md-4 col-sm-6 col-xs-12">
      <div className="single-course-block">
        <div className="image">
          <img src="images/course/1.jpg" alt="" />
        </div>
        <div className="text-box">
          <h5>
            <i className="flaticon-device" />
            <a href={courseUrlFromId(course.id)}>{course.title}</a>
          </h5>
          <p>
            Course Code : {course.code} <br />
            Audience : Developers<br />
            Public Classes{' '}
            <i className="fa fa-check-circle purple" aria-hidden="true" />
            <br />
            Private Onsite{' '}
            <i className="fa fa-check-circle purple" aria-hidden="true" />
            <br />
          </p>
          <ul className="clearfix">
            <li>
              <i className="flaticon-book" />
            </li>
            <li>
              <img src="images/course/4.jpg" alt="" />
            </li>
            <li>${course.price}</li>
          </ul>
          <h6>Duration : {course.length}</h6>
          <a
            href="/schedule"
            className="wow fadeInUp animated theme-line-button"
            data-wow-delay="0.1s"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
};