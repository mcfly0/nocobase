import { FileOutlined } from '@ant-design/icons';
import { uid } from '@formily/shared';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { PluginManager } from '..';
import { ActionContext, SchemaComponent } from '../schema-component';
import { storageSchema } from './schemas/storage';
import { StorageOptions } from './StorageOptions';

const schema = {
  type: 'object',
  properties: {
    [uid()]: {
      'x-component': 'Action.Drawer',
      type: 'void',
      title: '{{t("File storages")}}',
      properties: {
        storageSchema,
      },
    },
  },
};

export const FileStorageShortcut = () => {
  const { t } = useTranslation();
  const history = useHistory();
  return (
    <PluginManager.Toolbar.Item
      icon={<FileOutlined />}
      title={t('File storages')}
      onClick={() => {
        history.push('/admin/settings/file-manager/storages');
      }}
    />
  );
};

export const FileStorageShortcut2 = () => {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();
  return (
    <ActionContext.Provider value={{ visible, setVisible }}>
      <PluginManager.Toolbar.Item
        eventKey={'FileStorage'}
        onClick={() => {
          setVisible(true);
        }}
        icon={<FileOutlined />}
        title={t('File storages')}
      />
      <SchemaComponent components={{ StorageOptions }} schema={schema} />
    </ActionContext.Provider>
  );
};