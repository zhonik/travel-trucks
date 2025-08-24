import clsx from 'clsx';
import s from './FiltersSection.module.css';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const FiltersSection = ({ onSearch }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [location, setLocation] = useState('');
  const [form, setForm] = useState('');
  const [features, setFeatures] = useState([]);
  const [transmission, setTransmission] = useState('');

  useEffect(() => {
    setLocation(searchParams.get('location') || '');
    setForm(searchParams.get('form') || '');
    setFeatures(searchParams.getAll('features') || []);
    setTransmission(searchParams.get('transmission') || '');
  }, [searchParams]);

  const toggleFeature = feat =>
    setFeatures(prev => (prev.includes(feat) ? prev.filter(f => f !== feat) : [...prev, feat]));

  const handleSubmit = e => {
    e.preventDefault();

    const params = {};

    if (location) params.location = location;
    if (form) params.form = form;
    if (transmission) params.transmission = transmission;
    if (features.length > 0) params.features = features;

    setSearchParams(params);

    onSearch({ location, form, features, transmission });
  };

  const handleReset = () => {
    setLocation('');
    setForm('');
    setFeatures([]);
    setTransmission('');

    setSearchParams({});

    onSearch({ location: '', form: '', transmission: '', features: [] });
  };

  return (
    <div className={s.container}>
      <form className={s.formWrapp} onSubmit={handleSubmit}>
        <div className={s.location}>
          <label className={s.locationLabel} htmlFor='location'>
            Location
          </label>
          <div className={s.locationInputWrapp}>
            <input
              className={s.locationInput}
              type='text'
              id='location'
              placeholder='City'
              value={location}
              onChange={e => setLocation(e.target.value)}
            />
            <svg className={clsx(s.locationIcon)} width={20} height={20}>
              <use href='../../assets/icons.svg#icon-map'></use>
            </svg>
          </div>
        </div>

        <div className={s.filtersWrapp}>
          <span className={s.filtersTitle}>Filters</span>
          <div className={s.filters}>
            <h3 className={s.filtersSubtitle}>Vehicle equipment</h3>
            <div className={s.stroke}></div>
            <div className={s.filterGroup}>
              {[
                { value: 'AC', icon: 'icon-wind', label: 'AC' },
                { value: 'kitchen', icon: 'icon-cup-hot', label: 'Kitchen' },
                { value: 'bathroom', icon: 'icon-shower', label: 'Bathroom' },
                { value: 'TV', icon: 'icon-tv', label: 'TV' },
                { value: 'gas', icon: 'icon-gas-stove', label: 'Gas', clearFill: true },
                { value: 'microwave', icon: 'icon-microwave', label: 'Microwave', clearFill: true },
                { value: 'radio', icon: 'icon-radios', label: 'Radio' },
                { value: 'refrigerator', icon: 'icon-fridge-outline', label: 'Refrigerator' },
                { value: 'water', icon: 'icon-water-outline', label: 'Water', clearFill: true },
              ].map(({ value, icon, label, clearFill }) => (
                <label className={s.label} key={value}>
                  <input
                    className={s.input}
                    type='checkbox'
                    value={value}
                    checked={features.includes(value)}
                    onChange={() => toggleFeature(value)}
                  />
                  <span className={s.equipmentGroup}>
                    <svg
                      className={clsx(s.equipmentIcon, clearFill && s.clearFill)}
                      width={32}
                      height={32}
                    >
                      <use href={`../../assets/icons.svg#${icon}`} />
                    </svg>
                    {label}
                  </span>
                </label>
              ))}
              {[
                { value: 'automatic', icon: 'icon-diagram', label: 'Automatic' },
                { value: 'manual', icon: 'icon-diagram', label: 'Manual' },
              ].map(({ value, icon, label }) => (
                <label className={s.label} key={value}>
                  <input
                    className={s.input}
                    type='radio'
                    name='transmission'
                    value={value}
                    checked={transmission === value}
                    onChange={() => setTransmission(value)}
                  />
                  <span className={s.equipmentGroup}>
                    <svg className={s.equipmentIcon} width={32} height={32}>
                      <use href={`../../assets/icons.svg#${icon}`} />
                    </svg>
                    {label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className={s.filters}>
            <h3 className={s.filtersSubtitle}>Vehicle type</h3>
            <div className={s.stroke}></div>
            <div className={s.filterGroup}>
              {[
                { value: 'panelTruck', icon: 'icon-van', label: 'Van' },
                {
                  value: 'fullyIntegrated',
                  icon: 'icon-fully-Integrated',
                  label: 'Fully Integrated',
                },
                { value: 'alcove', icon: 'icon-alcove', label: 'Alcove' },
              ].map(({ value, icon, label }) => (
                <label className={s.label} key={value}>
                  <input
                    className={s.input}
                    type='radio'
                    name='type'
                    value={value}
                    checked={form === value}
                    onChange={() => setForm(value)}
                  />
                  <span className={s.equipmentGroup}>
                    <svg className={s.equipmentIcon} width={32} height={32}>
                      <use href={`../../assets/icons.svg#${icon}`} />
                    </svg>
                    {label}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className={s.btnWrapp}>
          <button className={s.button} type='submit'>
            Search
          </button>
          <button
            className={clsx(s.button, s.btnReset)}
            type='button'
            onClick={handleReset}
            disabled={searchParams.size === 0}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default FiltersSection;
