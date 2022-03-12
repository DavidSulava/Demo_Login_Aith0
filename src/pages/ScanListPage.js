import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CommonActions } from '../redux/actions';
import { useAuth0 } from '@auth0/auth0-react';
import ScanTable from '../components/ListTable';
import Form from 'react-bootstrap/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Paginator from '../components/Paginator';
import { Spinner } from 'react-bootstrap';


function ScanListPage() {
  const dispatch = useDispatch();
  const {getAccessTokenSilently} = useAuth0();
  const scanList = useSelector((state) => state.scans)
  const scanIdentities = useSelector((state) => state.scanIdentities)

  useEffect(() => {
    getAccessToken().then((token) => {
      dispatch(CommonActions.getScansAction(token));
    })
  }, [dispatch])
  useEffect(() => {
    if (scanList?.Data?.length) {
      const idList = scanList.Data.map(scans => scans.IdentityID)
      getAccessToken().then((token) => {
        dispatch(CommonActions.getScanIdentitiesAction(token, idList));
      })
    }
  }, [scanList])

  const getAccessToken = async () => {
    return await getAccessTokenSilently()
  }
  const enhancedScanIdentities = useMemo(() => {
    if (!scanIdentities?.Data)
      return []
    const data = scanIdentities?.Data.map((identity) => {
      const verdict = scanList.Data.find(scan => scan.IdentityID === identity.ID)
      return {...identity, VerdictName: verdict.VerdictName}
    })
    return data
  }, [scanIdentities])

  return (
    <div className='page-container'>
      <div className='page-wrapper'>
        <div className='filter-bar'>
          <div className='search-filter-wrapper'>
            <div className='has-search'>
              <FontAwesomeIcon icon={faSearch} className="icon-search"/>
            </div>
            <Form.Control type="text" placeholder="Поиск"/>
          </div>
          <Form.Select disabled>
            <option>Cортировать по</option>
            <option>select 1</option>
            <option>select 2</option>
            <option>select 3</option>
          </Form.Select>
        </div>
        <div className='table-wrapper'>
          {
            scanIdentities?.Data ?
              <ScanTable scanIdentities={enhancedScanIdentities}/>
              : <Spinner animation="border" variant="secondary" className="spinner-page"/>
          }
        </div>
        <div className='page-footer'>
          <Paginator/>
        </div>
      </div>
    </div>
  )
}

export default ScanListPage