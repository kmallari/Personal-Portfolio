import React from "react";
import { AnimatePresence, motion } from "framer-motion";

interface NotificationProps {
  notification: boolean;
}

export const Notification: React.FC<NotificationProps> = ({ notification }) => {
  return (
    <AnimatePresence>
      {notification && (
        <motion.div
          className='h-24 w-96 bg-primary-1 absolute rounded-xl top-16 right-12 font-dm_mono text-dark-neutral p-6 overflow-hidden z-50'
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          exit={{ x: 500 }}
        >
          <div>
            <p>
              Email has been sent! Expect a response within{" "}
              <span className='underline underline-offset-4 font-bold'>
                24 hours
              </span>
              .
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
