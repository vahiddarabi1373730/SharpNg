import { FormControlConfigInterface } from '../_models/form-generator.interface';
import { ChangeConfigInterface } from '../_services/change-config-property/change-config-property.service';

export function changeConfigProperty(
  config: FormControlConfigInterface,
  newConfig: ChangeConfigInterface,
) {
  if (config.name === newConfig.name) {
    Object.keys(config).forEach((property) => {
      if (property === newConfig.property) {
        config[property] = newConfig.newValue;
      } else {
        return;
      }
    });
  }
}
