import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faFlag } from '@fortawesome/free-regular-svg-icons';

const data = [
  {
    icon: <FontAwesomeIcon icon={faChartBar} />,
    name: "Stock Total",
    price: '150000',
    increase: 60,
    className: "List Card1"
  },
  {
    icon: <FontAwesomeIcon icon={faFlag} />,
    name: "Total Profit",
    price: '25000',
    increase: 30,
    className: "List Card2"
  },
  {
    icon: <FontAwesomeIcon icon={faFlag} />,
    name: "Unique Visitors",
    price: '250000',
    increase: 80,
    className: "List Card3"
  }
]

export default data;