import { ReactElement, useCallback, useEffect } from 'react';
import { Col } from '../Col';
import { Grid } from '../Grid';
import { Row } from '../Row';
import { colors } from '../design-tokens';
import { SideNamesVertical } from '../types';
import {
  CloseIcon,
  ToastBody,
  ToastContainer,
  ToastInner,
  ToastHeading,
  ToastTypeIcon,
  StandardCloseButton,
} from './styles';
import { ToastTypes } from './types';

interface ToastProps {
  accent?: string;
  background?: string;
  children: ReactElement | ReactElement[] | string;
  color?: string;
  direction?: SideNamesVertical;
  isOpen?: boolean;
  customClose?: ReactElement;
  onCloseCallback: () => void;
  title?: string;
  type?: ToastTypes;
}

export const Toast = ({
  accent,
  background = colors.white,
  children,
  color = colors.white,
  customClose,
  direction = 'top',
  isOpen = true,
  onCloseCallback,
  title,
  type,
}: ToastProps) => {
  const onKeyDownCallback = useCallback(
    (event) => {
      if (event.key === 'Escape') {
        onCloseCallback();
      }
    },
    [onCloseCallback]
  );

  let accentValue = accent;
  let iconName = null;
  if (type) {
    switch (type) {
      case 'info':
        accentValue = colors.messages.info;
        iconName = 'information-circle';
        break;
      case 'warning':
        accentValue = colors.messages.warning;
        iconName = 'warning';
        break;
      case 'success':
        accentValue = colors.messages.success;
        iconName = 'checkmark-circle';
        break;
      case 'error':
        accentValue = colors.messages.error;
        iconName = 'alert-circle';
        break;
      default:
        accentValue = colors.grayLight;
        iconName = 'cog';
        break;
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', onKeyDownCallback, false);
    return () => {
      document.removeEventListener('keydown', onKeyDownCallback, false);
    };
  }, [onKeyDownCallback]);

  return (
    <ToastContainer aria-hidden={!isOpen} direction={direction} isOpen={isOpen}>
      <ToastInner
        accentColor={accentValue}
        background={background}
        textColor={color}
      >
        <Grid>
          <Row end noWrap>
            {type && (
              <Col shrink>
                <ToastTypeIcon fill={accentValue} name={iconName} size={26} />
              </Col>
            )}
            {title && (
              <Col shrink>
                <ToastHeading level={2} size={3}>
                  {title}
                </ToastHeading>
                <ToastBody>{children}</ToastBody>
              </Col>
            )}
            <Col end flex grow top>
              <StandardCloseButton
                direction={direction}
                onClick={onCloseCallback}
              >
                {customClose ?? (
                  <CloseIcon
                    fill={colors.grayDarker}
                    name="close-outline"
                    size={26}
                  />
                )}
              </StandardCloseButton>
            </Col>
          </Row>
        </Grid>
      </ToastInner>
    </ToastContainer>
  );
};

Toast.displayName = 'Toast';
