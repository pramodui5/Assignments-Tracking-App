import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  MDBBtn,
  MDBIcon,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBTooltip,
  MDBSpinner,
} from 'mdb-react-ui-kit';
import { toast } from 'react-toastify';

import { deleteAssignmentStart, loadAssignmentsStart } from '../../modules/assignments/actions';
import PageTitle from '../../packages/PageTitle';

const AssignmentList = () => {
  const dispatch = useDispatch();
  const { assignments, loading, error, data } = useSelector((state) => state.assignmentsReducer);
  //const data = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(loadAssignmentsStart());
  }, []);

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  if (loading) {
    return (
      <MDBSpinner style={{ marginTop: '150px' }} role="status">
        <span className="visually-hidden">Loading...</span>
      </MDBSpinner>
    );
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure that you wanted to delete that assignment?')) {
      dispatch(deleteAssignmentStart(id));
      toast.success('Assignment Deleted Successfully');
    }
  };

  return (
    <>
      <PageTitle>Assignments Detail</PageTitle>
      <MDBTable className="mt-5">
        <MDBTableHead dark>
          <tr>
            <th>#</th>
            <th>Assignment Name</th>
            <th>Assignment Status</th>
            <th>Assignment Details</th>
            <th>Action</th>
          </tr>
        </MDBTableHead>
        {assignments &&
          assignments.map((item, index) => (
            <MDBTableBody key={index}>
              <tr>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.status}</td>
                <td>{item.description}</td>
                <td>
                  <MDBBtn
                    className="m-1"
                    tag="a"
                    color="none"
                    onClick={() => handleDelete(item.id)}
                  >
                    <MDBTooltip title="Delete" tag="a">
                      <MDBIcon fas icon="trash" style={{ color: '#c72b2b' }} size="lg" />
                    </MDBTooltip>
                  </MDBBtn>
                  <Link to={`/editTask/${item.id}`}>
                    <MDBTooltip title="Edit" tag="a">
                      <MDBIcon
                        fas
                        icon="pen"
                        style={{ color: '#55acee', marginBottom: '10px' }}
                        size="lg"
                      />
                    </MDBTooltip>
                  </Link>{' '}
                  <Link to={`/taskInfo/${item.id}`}>
                    <MDBTooltip title="View" tag="a">
                      <MDBIcon
                        fas
                        icon="eye"
                        style={{ color: '#3b5998', marginBottom: '10px' }}
                        size="lg"
                      />
                    </MDBTooltip>
                  </Link>
                </td>
              </tr>
            </MDBTableBody>
          ))}
      </MDBTable>
    </>
  );
};

export default AssignmentList;
