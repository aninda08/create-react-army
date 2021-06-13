import BEMHelper from 'react-bem-helper';

const NAMESPACE = 'portfolio'; // Insert a sorthand name for app on this string
const createBEMHelper = ({
  name,
}: {
  name: string;
}): BEMHelper<BEMHelper.ReturnObject> =>
  new BEMHelper({ prefix: `${NAMESPACE}_c_`, name });

export default createBEMHelper;
