export default function Footer({ copyright = '2020' }) {
  return (
    <footer className="footer-main text-center">
      <div className="d-block">
        <small>
          All logos, trademarks and registered trademarks are the property of
          their respective owners.
          <a href="https://github.com/dyarfi/nextjs-sequelize">
            Source Code @ {copyright}
          </a>
        </small>
      </div>
    </footer>
  );
}
