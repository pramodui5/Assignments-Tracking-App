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

import { deleteUserStart, loadUsersStart } from '../../modules/user/actions';
import Card from '../../packages/Card';
import PageTitle from '../../packages/PageTitle';
import { toast } from 'react-toastify';

const UserList = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(loadUsersStart());
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
    if (window.confirm('Are you sure that you wanted to delete that user?')) {
      dispatch(deleteUserStart(id));
      toast.success('User Deleted Successfully');
    }
  };

  return (
    <>
      <PageTitle>Users Detail</PageTitle>
      <MDBTable className="mt-5">
        <MDBTableHead dark>
          <tr>
            <th>#</th>
            <th>User Name</th>
            <th>E-Mail</th>
            <th>Contact Number</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </MDBTableHead>
        {users &&
          users.map((item, index) => (
            <MDBTableBody key={index}>
              <tr>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.password}</td>
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
                  <Link to={`/addEditUser/${item.id}`}>
                    <MDBTooltip title="Edit" tag="a">
                      <MDBIcon
                        fas
                        icon="pen"
                        style={{ color: '#55acee', marginBottom: '10px' }}
                        size="lg"
                      />
                    </MDBTooltip>
                  </Link>{' '}
                  <Link to={`/userInfo/${item.id}`}>
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

export default UserList;
