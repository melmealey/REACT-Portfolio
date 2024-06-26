
const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#6cdae7', padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <ul style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
          <a href='https://github.com/melmealey'>
            <img src="images/github Logo.webp" alt="Github" style={{ width: '50px', height: '50px' }} />
          </a>
          <a href='https://www.linkedin.com/in/mel-mealey-bb0048a2/'>
            <img src="images/LinkedIn logo.png" alt="LinkedIn" style={{ width: '50px', height: '50px' }} />
          </a>
          <a href='https://www.codecademy.com/learn'>
            <img src="images/codecademy.png" alt="codecademy" style={{ width: '50px', height: '50px' }} />
          </a>
      </ul>
    </footer>
  );
};

export default Footer;