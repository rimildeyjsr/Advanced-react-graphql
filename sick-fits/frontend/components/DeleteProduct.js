import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';

const DELETE_PRODUCT = gql`
  mutation DELETE_PRODUCT($id: ID!) {
    deleteProduct(id: $id) {
      id
      name
    }
  }
`;

function update(cache, payload) {
  cache.evict(cache.identify(payload.data.deleteProduct));
}

export default function DeleteProduct({ children, id }) {
  const [deleteProduct, { loading }] = useMutation(DELETE_PRODUCT, {
    variables: { id },
    update,
  });
  return (
    <button
      type="button"
      disabled={loading}
      onClick={() => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm('Are you sure want to delete this item')) {
          deleteProduct().catch((err) => alert(err.message));
        }
      }}
    >
      {children}
    </button>
  );
}

DeleteProduct.propTypes = {
  children: PropTypes.any,
  id: PropTypes.any,
};
