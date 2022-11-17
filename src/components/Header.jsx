import React from 'react'

import styles from './Header.module.css';

import igniteLogo from '../assets/ignite-logo.svg';

export function Header() {
  return (
    <div className={styles.header}>
      <img src={igniteLogo} alt="Ignite Logotipo" />
      <h1>Ignite Feed</h1>
    </div>
  )
}
