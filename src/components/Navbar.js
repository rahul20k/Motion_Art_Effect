import React from 'react';
import images from '../assets/images.png';

const Navbar = () => {
  const handleClick = () => {
    const url = 'https://codecanyon.net/checkout/102316867/create_account?_ga=2.43125925.1669195575.1716209776-1129150054.1713500484';
    
    window.open(url,'noopener,noreferrer');
  };
  return (
    
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 16px', backgroundColor: '#262626', position: 'fixed', width: '100%'}}>
    <a style={{ display: 'flex', justifyContent: 'flex-start' }} href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891?_gl=1*ks7k65*_gcl_au*MTI4NTA1Mzc1OC4xNzEzNTAwNDg1*_ga*MTEyOTE1MDA1NC4xNzEzNTAwNDg0*_ga_ZKBVC1X78F*MTcxNjI2NDU2NS4xNi4xLjE3MTYyNjQ2NjcuMC4wLjA.&_ga=2.119619720.1669195575.1716209776-1129150054.1713500484">
        <img src={images} style={{ marginRight: '12px', height: '24px' }} alt="Logo" />
    </a>
    <div style={{ marginTop: '8px', display: 'flex', alignItems: 'center' }}>
        <button type="button" onClick={handleClick} style={{ color: 'white', backgroundColor: '#7aa93c', fontWeight: '500', borderRadius: '4px', fontSize: '14px', padding: '6px 16px', marginRight: '8px', marginBottom: '8px' }}>
            Buy Now
        </button>
    </div>
</div>
  )
}

export default Navbar;