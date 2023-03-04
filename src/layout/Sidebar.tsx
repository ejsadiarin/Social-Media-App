export default function Sidebar() {
  const Menus = [
    { title: 'Dashboard', src: '' },
    { title: 'About', src: '' },
    { title: 'Projects', src: '' },
    { title: 'Trackers', src: '' },
    { title: 'Utilities', src: '' },
    { title: 'Analytics', src: '' },
    { title: 'Settings', src: '' },
    { title: 'Idk', src: '' },
  ];

  return (
    <div className="sidebar">
      <div>logo or image here</div>
      <h2>Ej Sadiarin</h2>
      <ul className="sidebar-selection">
        {Menus.map((menu) => (
          <li key={menu.title}>{menu.title}</li>
        ))}
      </ul>
    </div>
  );
}
