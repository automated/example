/* eslint-disable */
import runner from '@automated/plugin-jest';
import * as config from '../../.automated';
import * as component from '../../';
config.__dirpath = 'src/components/button';
runner({ config, component });
