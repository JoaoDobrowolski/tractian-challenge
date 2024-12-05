import { TreeNode } from '@app/utils/tree';
import styles from './styles.module.scss';
import { Bolt, Circle, Inbox, Router, Sensor } from '@assets/icons';
import classNames from 'classnames';

type ComponentDetailsProps = {
  details: TreeNode | null;
};

export default function ComponentDetails({ details }: ComponentDetailsProps) {
  const getComponentIcon = () => {
    if (details && details.type === 'component') {
      const icon = details.sensorType === 'energy' ? <Bolt /> : <Circle />;
      const color = details.status === 'alert' ? styles.red : styles.green;
      return <span className={color}>{icon}</span>;
    }
    return null;
  };

  return (
    <div className={styles.content}>
      {details && (
        <>
          <section className={styles['title-section']}>
            <h3>{details.name}</h3>
            {getComponentIcon()}
          </section>
          <div className={styles['content-section']}>
            <section className={styles['main-section']}>
              <div className={styles['image-container']}>
                <Inbox />
                <p>Adicionar imagem do Ativo</p>
              </div>
              <div className={styles['side-info-container']}>
                <div className={classNames(styles['vertical-wrapper'], styles.border)}>
                  <p className={styles.statement}>Tipo de Equipamento</p>
                  <p className={styles.info}>[no-data]</p>
                </div>
                <div className={styles['vertical-wrapper']}>
                  <p className={styles.statement}>Responsáveis</p>
                  <p className={styles.info}>[no-data]</p>
                </div>
              </div>
            </section>
            <section className={styles['sensor-section']}>
              <div className={styles['horizontal-wrapper']}>
                <div className={classNames(styles['vertical-wrapper'], styles.spacing)}>
                  <p className={styles.statement}>Sensor</p>
                  <div className={styles['horizontal-wrapper']}>
                    <Sensor className={styles.icon} />
                    <p className={styles.info}>{details.sensorId}</p>
                  </div>
                </div>
                <div className={styles['vertical-wrapper']}>
                  <p className={styles.statement}>Receptor</p>
                  <div className={styles['horizontal-wrapper']}>
                    <Router className={styles.icon} />
                    <p className={styles.info}>[no-data]</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </>
      )}
    </div>
  );
}
