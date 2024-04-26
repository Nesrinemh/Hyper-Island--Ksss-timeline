import { useState } from 'react';
import { Switch } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ToggleLanguages() {
  const [enabled, setEnabled] = useState(
    localStorage.getItem('language') !== 'english'
  );

  const toggleLanguage = () => {
    const newLanguage = enabled ? 'english' : 'swedish';
    localStorage.setItem('language', newLanguage);
    setEnabled(!enabled);
    window.location.reload();
  };

  return (
    <Switch
      checked={!enabled}
      onChange={toggleLanguage}
      className={classNames(
        !enabled ? 'bg-[#017AAF]' : 'bg-gray-200',
        'flex items-center  flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#017AAF]'
      )}
    >
      <span className="sr-only">Use setting</span>
      <span
        className={classNames(
          !enabled ? 'translate-x-5' : 'translate-x-0',
          'pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
        )}
      >
        <span
          className={classNames(
            !enabled
              ? 'opacity-0 ease-out duration-100'
              : 'opacity-100 ease-in duration-200',
            'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
          )}
          aria-hidden="true"
        >
          <p className="font-bold text-xs text-[#017AAF] ">SE</p>
        </span>
        <span
          className={classNames(
            !enabled
              ? 'opacity-100 ease-in duration-200'
              : 'opacity-0 ease-out duration-100',
            'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
          )}
          aria-hidden="true"
        >
          <p className="font-bold text-xs text-[#017AAF] ">EN</p>
        </span>
      </span>
    </Switch>
  );
}
