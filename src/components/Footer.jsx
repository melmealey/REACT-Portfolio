
const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#6cdae7', padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <ul style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
      <h4>Connect with Me</h4>
        <li>
          <a href='https://github.com/melmealey'>
            <img src="images/github Logo.webp" alt="Github" style={{ width: '50px', height: '50px' }} />
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/mel-mealey-bb0048a2/'>
            <img src="images/LinkedIn logo.png" alt="LinkedIn" style={{ width: '50px', height: '50px' }} />
          </a>
        </li>
        <li>
          <a href='https://www.facebook.com/mel.mealey'>
            <img src="images/Facebook.svg" alt="Github" style={{ width: '50px', height: '50px' }} />
          </a>
        </li>
        {/* <h4>Connect with Me</h4> */}
      </ul>
      {/* <h4>Connect with Me</h4> */}
    </footer>
  );
};

export default Footer;