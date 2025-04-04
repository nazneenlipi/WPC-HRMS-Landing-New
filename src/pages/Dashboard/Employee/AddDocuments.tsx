import {
  Button,
  DatePicker,
  Input,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  Textarea,
} from "@heroui/react";
import {
  annualPays,
  bankNames,
  countries,
  dbsTypes,
  deductions,
  employmentTypes,
  maritalStatus,
  nationalities,
  payGroups,
  paymentCurrencies,
  paymentModes,
  paymentTypes,
  taxables,
  taxCodes,
  wedgesPaymodes,
} from "../../../data";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { format } from "date-fns";

const AddDocuments = () => {
  const { register, control, handleSubmit } = useForm();

  const handleSubmitForm = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <main className="dashboard-padding">
      <h1 className="text-2xl font-medium pb-2 border-b border-hrms-blue-light">
        Add Your Documents
      </h1>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        {/* Employee personal details */}
        <div>
          <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
            Personal Details
          </h1>
          <div className="grid grid-cols-4 gap-5 pt-5">
            <Input
              radius="sm"
              label="Employee Code"
              labelPlacement="outside"
              placeholder="Enter employee code"
              type="text"
              isRequired
              className="text-hrms-blue font-semibold"
              {...register("employeeCode")}
            />
            <Input
              radius="sm"
              label="First Name"
              labelPlacement="outside"
              placeholder="Enter first name"
              type="text"
              isRequired
              className="text-hrms-blue font-semibold"
              {...register("firstName")}
            />
            <Input
              radius="sm"
              label="Middle Name"
              labelPlacement="outside"
              placeholder="Enter middle name"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("middleName")}
            />
            <Input
              radius="sm"
              label="Last Name"
              labelPlacement="outside"
              placeholder="Enter last name"
              type="text"
              isRequired
              className="text-hrms-blue font-semibold"
              {...register("lastName")}
            />

            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <Select
                  radius="sm"
                  label="Gender"
                  className="text-hrms-blue font-semibold"
                  labelPlacement="outside"
                  placeholder="Select gender"
                  selectedKeys={
                    field.value ? new Set([field.value]) : new Set()
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
                >
                  <SelectItem key="Male" value="Male">
                    Male
                  </SelectItem>
                  <SelectItem key="Female" value="Female">
                    Female
                  </SelectItem>
                  <SelectItem key="Others" value="Others">
                    Others
                  </SelectItem>
                </Select>
              )}
            />

            <Input
              radius="sm"
              label="NI Number"
              labelPlacement="outside"
              placeholder="Enter NI Number"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("niNumber")}
            />

            <Controller
              name="dateOfBirth"
              control={control}
              render={({ field }) => (
                <DatePicker
                  radius="sm"
                  className="text-hrms-blue font-semibold"
                  label="Date of Birth"
                  labelPlacement="outside"
                  onChange={(date) =>
                    field.onChange(
                      date
                        ? format(
                            new Date(date.year, date.month - 1, date.day),
                            "dd-MM-yyyy"
                          )
                        : ""
                    )
                  }
                />
              )}
            />

            <Controller
              name="maritalStatus"
              control={control}
              render={({ field }) => (
                <Select
                  radius="sm"
                  label="Marital Status"
                  className="text-hrms-blue font-semibold"
                  labelPlacement="outside"
                  placeholder="Select status"
                  selectedKeys={
                    field.value ? new Set([field.value]) : new Set()
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
                >
                  {maritalStatus.map((status) => (
                    <SelectItem key={status.value} value={status.value}>
                      {status.value}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />
            <Controller
              name="nationality"
              control={control}
              render={({ field }) => (
                <Select
                  radius="sm"
                  label="Nationality"
                  className="text-hrms-blue font-semibold"
                  labelPlacement="outside"
                  placeholder="Select nationality"
                  selectedKeys={
                    field.value ? new Set([field.value]) : new Set()
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
                >
                  {nationalities.map((nationality) => (
                    <SelectItem
                      key={nationality.value}
                      value={nationality.value}
                    >
                      {nationality.value}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />
            <Input
              radius="sm"
              label="Email"
              labelPlacement="outside"
              placeholder="Enter email"
              type="email"
              isRequired
              className="text-hrms-blue font-semibold"
              {...register("email")}
            />
            <Input
              radius="sm"
              label="Contact Number"
              labelPlacement="outside"
              placeholder="Enter contact number"
              type="text"
              isRequired
              className="text-hrms-blue font-semibold"
              {...register("contactNumber")}
            />
            <Input
              radius="sm"
              label="Alternative Number"
              labelPlacement="outside"
              placeholder="Enter alternative number"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("alternativeNumber")}
            />
          </div>
        </div>
        {/* Service details */}
        <div>
          <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
            Service Details
          </h1>
          <div className="grid grid-cols-4 gap-5 pt-5">
            <Input
              radius="sm"
              label="Department"
              labelPlacement="outside"
              placeholder="Enter department"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("department")}
            />
            <Input
              radius="sm"
              label="Designation"
              labelPlacement="outside"
              placeholder="Enter designation"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("designation")}
            />
            <Controller
              name="dateOfJoining"
              control={control}
              render={({ field }) => (
                <DatePicker
                  radius="sm"
                  className="text-hrms-blue font-semibold"
                  label="Date of Joining"
                  labelPlacement="outside"
                  onChange={(date) =>
                    field.onChange(
                      date
                        ? format(
                            new Date(date.year, date.month - 1, date.day),
                            "dd-MM-yyyy"
                          )
                        : ""
                    )
                  }
                />
              )}
            />
            <Controller
              name="employeeType"
              control={control}
              render={({ field }) => (
                <Select
                  radius="sm"
                  label="Employee Type"
                  className="text-hrms-blue font-semibold"
                  labelPlacement="outside"
                  placeholder="Select employee type"
                  selectedKeys={
                    field.value ? new Set([field.value]) : new Set()
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
                >
                  {employmentTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.value}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />
            <Controller
              name="dateOfConfirmation"
              control={control}
              render={({ field }) => (
                <DatePicker
                  radius="sm"
                  className="text-hrms-blue font-semibold"
                  label="Date of Confirmation"
                  labelPlacement="outside"
                  onChange={(date) =>
                    field.onChange(
                      date
                        ? format(
                            new Date(date.year, date.month - 1, date.day),
                            "dd-MM-yyyy"
                          )
                        : ""
                    )
                  }
                />
              )}
            />
            <Controller
              name="contractStartDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  radius="sm"
                  className="text-hrms-blue font-semibold"
                  label="Contract Start Date"
                  labelPlacement="outside"
                  onChange={(date) =>
                    field.onChange(
                      date
                        ? format(
                            new Date(date.year, date.month - 1, date.day),
                            "dd-MM-yyyy"
                          )
                        : ""
                    )
                  }
                />
              )}
            />
            <Controller
              name="contractEndDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  radius="sm"
                  className="text-hrms-blue font-semibold"
                  label="Contract End Date (if applicable)"
                  labelPlacement="outside"
                  onChange={(date) =>
                    field.onChange(
                      date
                        ? format(
                            new Date(date.year, date.month - 1, date.day),
                            "dd-MM-yyyy"
                          )
                        : ""
                    )
                  }
                />
              )}
            />
            <Input
              radius="sm"
              label="Job Location"
              labelPlacement="outside"
              placeholder="Enter job location"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("jobLocation")}
            />
            <Input
              radius="sm"
              label="Profile Picture"
              labelPlacement="outside"
              type="file"
              className="text-hrms-blue font-semibold"
              {...register("profilePicture")}
            />
            <Input
              radius="sm"
              label="Reporting Authority"
              labelPlacement="outside"
              placeholder="Enter reporting authority"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("reportingAuthority")}
            />
            <Input
              radius="sm"
              label="Leave Sanction Authority"
              labelPlacement="outside"
              placeholder="Enter leave sanction authority"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("leaveSanctionAuthority")}
            />
          </div>
        </div>
        {/* Educational details */}

        <div>
          <h1 className="text-xl font-medium py-2 border-b border-hrms-blue-light">
            Educational Details
          </h1>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-2">Sl. No.</th>
                <th className="border p-2">Qualification</th>
                <th className="border p-2">Subject</th>
                <th className="border p-2">Institution Name</th>
                <th className="border p-2">Awarding Body/ University</th>
                <th className="border p-2">Year of Passing</th>
                <th className="border p-2">Percentage</th>
                <th className="border p-2">Grade/Division</th>
                <th className="border p-2">Transcript Document</th>
                <th className="border p-2">Certificate Document</th>
                <th className="border p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">1</td>
                <td className="border p-2">
                  <Controller
                    name="qualification"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        className="w-full p-1 border rounded"
                      />
                    )}
                  />
                </td>
                <td className="border p-2">
                  <Controller
                    name="subject"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        className="w-full p-1 border rounded"
                      />
                    )}
                  />
                </td>
                <td className="border p-2">
                  <Controller
                    name="institutionName"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        className="w-full p-1 border rounded"
                      />
                    )}
                  />
                </td>
                <td className="border p-2">
                  <Controller
                    name="awardingBody"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        className="w-full p-1 border rounded"
                      />
                    )}
                  />
                </td>
                <td className="border p-2">
                  <Controller
                    name="yearOfPassing"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        className="w-full p-1 border rounded"
                      />
                    )}
                  />
                </td>
                <td className="border p-2">
                  <Controller
                    name="percentage"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        className="w-full p-1 border rounded"
                      />
                    )}
                  />
                </td>
                <td className="border p-2">
                  <Controller
                    name="gradeDivision"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        className="w-full p-1 border rounded"
                      />
                    )}
                  />
                </td>
                <td className="border p-2">
                  <Input
                    radius="sm"
                    labelPlacement="outside"
                    type="file"
                    className="text-hrms-blue font-semibold"
                    {...register("taxReference")}
                  />
                </td>
                <td className="border p-2">
                  <Input
                    radius="sm"
                    labelPlacement="outside"
                    type="file"
                    className="text-hrms-blue font-semibold"
                    {...register("taxReference")}
                  />
                </td>
                <td className="border p-2">
                  <button
                    type="button"
                    className="bg-green-500 text-white p-2 rounded"
                  >
                    +
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Job Details */}
        <div>
          <h1 className="text-xl font-medium py-2 border-b border-hrms-blue-light">
            Job Details
          </h1>
          <div className="grid grid-cols-3 gap-5 pt-5">
            <Input
              radius="sm"
              label="Job Title"
              labelPlacement="outside"
              placeholder="Enter job title"
              type="text"
              className="text-hrms-blue font-semibold"
            />
            <Controller
              name="startDate"
              control={control}
              rules={{ required: "Start Date is required" }}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  radius="sm"
                  className="text-hrms-blue font-semibold"
                  label="Start Date"
                  labelPlacement="outside"
                  onChange={field.onChange}
                />
              )}
            />
            <Controller
              name="endDate"
              control={control}
              rules={{ required: "End Date is required" }}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  radius="sm"
                  className="text-hrms-blue font-semibold"
                  label="Start Date"
                  labelPlacement="outside"
                  onChange={field.onChange}
                />
              )}
            />
            <Input
              radius="sm"
              label="Years of Experience"
              labelPlacement="outside"
              placeholder="Enter years of experience"
              type="number"
              className="text-hrms-blue font-semibold"
            />
            <Textarea
              radius="sm"
              label="Job Description"
              labelPlacement="outside"
              placeholder="Enter job description"
              maxRows={5}
              minRows={5}
              className="text-hrms-blue font-semibold col-span-3 row-span-2"
            />
          </div>
        </div>
        {/* key responsibility */}
        <div>
          <h1 className="text-xl font-medium py-2 border-b border-hrms-blue-light">
            Key Responsibilities
          </h1>
          <div className="grid grid-cols-3 gap-5 pt-5">
            <Input
              radius="sm"
              label="Responsibility Name"
              labelPlacement="outside"
              placeholder="Enter Responsibility Name"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("responsibilityName")}
            />
          </div>
        </div>

        {/* training details details */}

        <div>
          <h1 className="text-xl font-medium py-2 border-b border-hrms-blue-light">
            Training Details
          </h1>
          <div className="grid grid-cols-3 gap-5 pt-5">
            <Input
              radius="sm"
              label="Department"
              labelPlacement="outside"
              placeholder="Enter department"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("department")}
            />
            <Controller
              name="startDate"
              control={control}
              rules={{ required: "Start Date is required" }}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  radius="sm"
                  className="text-hrms-blue font-semibold"
                  label="Start Date"
                  labelPlacement="outside"
                  onChange={field.onChange}
                />
              )}
            />
            <Controller
              name="endDate"
              control={control}
              rules={{ required: "End Date is required" }}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  radius="sm"
                  className="text-hrms-blue font-semibold"
                  label="Start Date"
                  labelPlacement="outside"
                  onChange={field.onChange}
                />
              )}
            />
            <Textarea
              radius="sm"
              label="Job Description"
              labelPlacement="outside"
              placeholder="Enter job description"
              maxRows={5}
              minRows={5}
              className="text-hrms-blue font-semibold col-span-1 row-span-2"
            />
          </div>
        </div>

        {/*  Next of Kin Information */}
        <div>
          <h1 className="text-xl font-medium py-2 border-b border-hrms-blue-light">
            Emergency / Next of Kin Contact Details
          </h1>
          <div className="grid grid-cols-4 gap-5 pt-5">
            <Input
              radius="sm"
              label="Next of Kin Contact Name"
              labelPlacement="outside"
              placeholder="Enter name"
              type="text"
              className="text-hrms-blue font-semibold"
            />
            <Input
              radius="sm"
              label="Next of Kin Contact Relationship"
              labelPlacement="outside"
              placeholder="Enter relationship"
              type="text"
              className="text-hrms-blue font-semibold"
            />
            <Input
              radius="sm"
              label="Next of Kin Contact Email"
              labelPlacement="outside"
              placeholder="Enter contact email"
              type="tel"
              className="text-hrms-blue font-semibold"
            />
            <Input
              radius="sm"
              label="Next of Kin Contact Number"
              labelPlacement="outside"
              placeholder="Enter contact number"
              type="tel"
              className="text-hrms-blue font-semibold"
            />
            <Input
              radius="sm"
              label="Next of Kin Contact Address"
              labelPlacement="outside"
              placeholder="Enter address"
              type="text"
              className="text-hrms-blue font-semibold"
            />
          </div>
        </div>
        {/* Certified Membership */}

        <div>
          <h1 className="text-xl font-medium py-2 border-b border-hrms-blue-light">
            Certified Membership
          </h1>
          <div className="grid grid-cols-4 gap-5 pt-5">
            <Input
              radius="sm"
              label="Title of Certified License"
              labelPlacement="outside"
              placeholder="Enter Title of Certified License"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("titleCertifiedLicense")}
            />
            <Input
              radius="sm"
              label="License Number"
              labelPlacement="outside"
              placeholder="Enter License Number"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("licenseNumber")}
            />
            <Controller
              name="startDate"
              control={control}
              rules={{ required: "Start Date is required" }}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  radius="sm"
                  className="text-hrms-blue font-semibold"
                  label="Start Date"
                  labelPlacement="outside"
                  onChange={field.onChange}
                />
              )}
            />
            <Controller
              name="endDate"
              control={control}
              rules={{ required: "End Date  is required" }}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  radius="sm"
                  className="text-hrms-blue font-semibold"
                  label="Start Date"
                  labelPlacement="outside"
                  onChange={field.onChange}
                />
              )}
            />
          </div>
        </div>

        {/* Contact Information  */}
        <div className="pt-5">
          <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
            Contact Information (Correspondence Address)
          </h1>
          <div className="grid grid-cols-4 gap-5 pt-5">
            <Input
              radius="sm"
              label="Post Code"
              labelPlacement="outside"
              placeholder="Enter post code"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("postCode")}
            />
            <Input
              radius="sm"
              label="Address Line 1"
              labelPlacement="outside"
              placeholder="Enter address line 1"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("addressLine1")}
            />
            <Input
              radius="sm"
              label="Address Line 2"
              labelPlacement="outside"
              placeholder="Enter address line 2"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("addressLine2")}
            />
            <Input
              radius="sm"
              label="Address Line 3"
              labelPlacement="outside"
              placeholder="Enter address line 3"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("addressLine3")}
            />
            <Input
              radius="sm"
              label="City / County"
              labelPlacement="outside"
              placeholder="Enter city / county"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("cityCounty")}
            />
            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <Select
                  radius="sm"
                  label="Country"
                  className="text-hrms-blue font-semibold"
                  labelPlacement="outside"
                  placeholder="Select country"
                  selectedKeys={
                    field.value ? new Set([field.value]) : new Set()
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
                >
                  {countries.map((country) => (
                    <SelectItem key={country.value} value={country.value}>
                      {country.value}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />
            <Input
              radius="sm"
              label="Proof Of Address"
              labelPlacement="outside"
              type="file"
              className="text-hrms-blue font-semibold"
              {...register("proofOfAddress")}
            />
          </div>
        </div>

        {/* passport details */}
        <div className="pt-5">
          <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
            Passport Details
          </h1>
          <div className="grid grid-cols-4 gap-5 pt-5">
            <Input
              radius="sm"
              label="Passport Number"
              labelPlacement="outside"
              placeholder="Enter passport number"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("passportNumber")}
            />
            <Controller
              name="passportNationality"
              control={control}
              render={({ field }) => (
                <Select
                  radius="sm"
                  label="Nationality (Passport)"
                  className="text-hrms-blue font-semibold"
                  labelPlacement="outside"
                  placeholder="Select nationality"
                  selectedKeys={
                    field.value ? new Set([field.value]) : new Set()
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
                >
                  {nationalities.map((nationality) => (
                    <SelectItem
                      key={nationality.value}
                      value={nationality.value}
                    >
                      {nationality.value}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />
            <Input
              radius="sm"
              label="Place of Birth"
              labelPlacement="outside"
              placeholder="Enter place of birth"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("placeOfBirth")}
            />
            <Input
              radius="sm"
              label="Passport Issued By"
              labelPlacement="outside"
              placeholder="Enter issuing authority"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("passportIssuedBy")}
            />

            <Controller
              name="passportIssueDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  radius="sm"
                  className="text-hrms-blue font-semibold"
                  label="Passport Issue Date"
                  labelPlacement="outside"
                  onChange={(date) =>
                    field.onChange(
                      date
                        ? format(
                            new Date(date.year, date.month - 1, date.day),
                            "dd-MM-yyyy"
                          )
                        : ""
                    )
                  }
                />
              )}
            />

            <Controller
              name="passportExpiryDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  radius="sm"
                  className="text-hrms-blue font-semibold"
                  label="Passport Expiry Date"
                  labelPlacement="outside"
                  onChange={(date) =>
                    field.onChange(
                      date
                        ? format(
                            new Date(date.year, date.month - 1, date.day),
                            "dd-MM-yyyy"
                          )
                        : ""
                    )
                  }
                />
              )}
            />

            <Controller
              name="passportEligibleReviewDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  radius="sm"
                  className="text-hrms-blue font-semibold"
                  label="Passport Eligible Review Date"
                  labelPlacement="outside"
                  onChange={(date) =>
                    field.onChange(
                      date
                        ? format(
                            new Date(date.year, date.month - 1, date.day),
                            "dd-MM-yyyy"
                          )
                        : ""
                    )
                  }
                />
              )}
            />

            <Input
              radius="sm"
              label="Passport Document"
              labelPlacement="outside"
              type="file"
              className="text-hrms-blue font-semibold"
              {...register("passportDocument")}
            />
            <Input
              radius="sm"
              label="Passport Remarks"
              labelPlacement="outside"
              placeholder="Enter passport remarks"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("passportRemarks")}
            />
            <Controller
              name="isCurrentPassport"
              control={control}
              render={({ field }) => (
                <Select
                  radius="sm"
                  label="Is this your current passport?"
                  className="text-hrms-blue font-semibold"
                  labelPlacement="outside"
                  placeholder="Select Yes or No"
                  selectedKeys={
                    field.value ? new Set([field.value]) : new Set()
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
                >
                  <SelectItem key="Yes" value="Yes">
                    Yes
                  </SelectItem>
                  <SelectItem key="No" value="No">
                    No
                  </SelectItem>
                </Select>
              )}
            />
          </div>
        </div>

        {/*  Visa Information */}
        <div className="pt-5">
          <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
            Visa/BRP Details
          </h1>
          <div className="grid grid-cols-4 gap-5 pt-5">
            <Input
              radius="sm"
              label="BPP/Visa Number"
              labelPlacement="outside"
              placeholder="Enter visa number"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("visaNumber")}
            />
            <Controller
              name="visaNationality"
              control={control}
              render={({ field }) => (
                <Select
                  radius="sm"
                  label="Nationality"
                  className="text-hrms-blue font-semibold"
                  labelPlacement="outside"
                  placeholder="Select nationality"
                  selectedKeys={
                    field.value ? new Set([field.value]) : new Set()
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
                >
                  {nationalities.map((nationality) => (
                    <SelectItem
                      key={nationality.value}
                      value={nationality.value}
                    >
                      {nationality.value}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />
            <Controller
              name="countryOfResidence"
              control={control}
              render={({ field }) => (
                <Select
                  radius="sm"
                  label="Country of Residence"
                  className="text-hrms-blue font-semibold"
                  labelPlacement="outside"
                  placeholder="Select country"
                  selectedKeys={
                    field.value ? new Set([field.value]) : new Set()
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
                >
                  {countries.map((country) => (
                    <SelectItem key={country.value} value={country.value}>
                      {country.value}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />
            <Input
              radius="sm"
              label="Visa Issued By"
              labelPlacement="outside"
              placeholder="Enter visa issuing authority"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("visaIssuedBy")}
            />
            <Controller
              name="visaIssueDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  radius="sm"
                  className="text-hrms-blue font-semibold"
                  label="Visa Issue Date"
                  labelPlacement="outside"
                  onChange={(date) =>
                    field.onChange(
                      date
                        ? format(
                            new Date(date.year, date.month - 1, date.day),
                            "dd-MM-yyyy"
                          )
                        : ""
                    )
                  }
                />
              )}
            />

            <Controller
              name="visaExpiryDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  radius="sm"
                  className="text-hrms-blue font-semibold"
                  label="Visa Expiry Date"
                  labelPlacement="outside"
                  onChange={(date) =>
                    field.onChange(
                      date
                        ? format(
                            new Date(date.year, date.month - 1, date.day),
                            "dd-MM-yyyy"
                          )
                        : ""
                    )
                  }
                />
              )}
            />

            <Controller
              name="visaEligibleReviewDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  radius="sm"
                  className="text-hrms-blue font-semibold"
                  label="Visa Eligible Review Date"
                  labelPlacement="outside"
                  onChange={(date) =>
                    field.onChange(
                      date
                        ? format(
                            new Date(date.year, date.month - 1, date.day),
                            "dd-MM-yyyy"
                          )
                        : ""
                    )
                  }
                />
              )}
            />
            <Input
              radius="sm"
              label="Visa Document Front Side"
              labelPlacement="outside"
              type="file"
              className="text-hrms-blue font-semibold"
              {...register("visaDocumentFrontSide")}
            />
            <Input
              radius="sm"
              label="Visa Document Back Side"
              labelPlacement="outside"
              type="file"
              className="text-hrms-blue font-semibold"
              {...register("visaDocumentBackSide")}
            />
            <Input
              radius="sm"
              label="Visa Remarks"
              labelPlacement="outside"
              placeholder="Enter visa remarks"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("visaRemarks")}
            />
            <Controller
              name="isCurrentVisa"
              control={control}
              render={({ field }) => (
                <Select
                  radius="sm"
                  label="Is this your current Visa?"
                  className="text-hrms-blue font-semibold"
                  labelPlacement="outside"
                  placeholder="Select Yes or No"
                  selectedKeys={
                    field.value ? new Set([field.value]) : new Set()
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
                >
                  <SelectItem key="Yes" value="Yes">
                    Yes
                  </SelectItem>
                  <SelectItem key="No" value="No">
                    No
                  </SelectItem>
                </Select>
              )}
            />
          </div>
        </div>

        {/*EUSS (European Union Settlement Scheme) / Time Limit Details  */}
        <div className="pt-5">
          <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
            EUSS/Time Limit Details
          </h1>
          <div className="grid grid-cols-4 gap-5 pt-5">
            <Input
              radius="sm"
              label="Reference Number"
              labelPlacement="outside"
              placeholder="Enter reference number"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("eussReferenceNumber")}
            />
            <Controller
              name="eussNationality"
              control={control}
              render={({ field }) => (
                <Select
                  radius="sm"
                  label="Nationality"
                  className="text-hrms-blue font-semibold"
                  labelPlacement="outside"
                  placeholder="Select nationality"
                  selectedKeys={
                    field.value ? new Set([field.value]) : new Set()
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
                >
                  {nationalities.map((nationality) => (
                    <SelectItem
                      key={nationality.value}
                      value={nationality.value}
                    >
                      {nationality.value}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />
            <Controller
              name="eussIssueDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  radius="sm"
                  className="text-hrms-blue font-semibold"
                  label="Issue Date"
                  labelPlacement="outside"
                  onChange={(date) =>
                    field.onChange(
                      date
                        ? format(
                            new Date(date.year, date.month - 1, date.day),
                            "dd-MM-yyyy"
                          )
                        : ""
                    )
                  }
                />
              )}
            />
            <Controller
              name="eussExpiryDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  radius="sm"
                  className="text-hrms-blue font-semibold"
                  label="Expiry Date"
                  labelPlacement="outside"
                  onChange={(date) =>
                    field.onChange(
                      date
                        ? format(
                            new Date(date.year, date.month - 1, date.day),
                            "dd-MM-yyyy"
                          )
                        : ""
                    )
                  }
                />
              )}
            />
            <Controller
              name="eussEligibleReviewDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  radius="sm"
                  className="text-hrms-blue font-semibold"
                  label="Eligible Review Date"
                  labelPlacement="outside"
                  onChange={(date) =>
                    field.onChange(
                      date
                        ? format(
                            new Date(date.year, date.month - 1, date.day),
                            "dd-MM-yyyy"
                          )
                        : ""
                    )
                  }
                />
              )}
            />
            <Input
              radius="sm"
              label="EUSS/Time Limit Document"
              labelPlacement="outside"
              type="file"
              className="text-hrms-blue font-semibold"
              {...register("eussDocument")}
            />
            <Input
              radius="sm"
              label="EUSS/Time Limit Remarks"
              labelPlacement="outside"
              placeholder="Enter remarks"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("eussRemarks")}
            />
            <Controller
              name="isCurrentEussStatus"
              control={control}
              render={({ field }) => (
                <Select
                  radius="sm"
                  label="Is this your current status?"
                  className="text-hrms-blue font-semibold"
                  labelPlacement="outside"
                  placeholder="Select Yes or No"
                  selectedKeys={
                    field.value ? new Set([field.value]) : new Set()
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
                >
                  <SelectItem key="Yes" value="Yes">
                    Yes
                  </SelectItem>
                  <SelectItem key="No" value="No">
                    No
                  </SelectItem>
                </Select>
              )}
            />
          </div>
        </div>

        {/* DBS (Disclosure and Barring Service) Information */}
        <div className="pt-5">
          <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
            DBS (Disclosure and Barring Service) Information
          </h1>
          <div className="grid grid-cols-4 gap-5 pt-5">
            <Controller
              name="dbsType"
              control={control}
              render={({ field }) => (
                <Select
                  radius="sm"
                  label="DBS Type"
                  className="text-hrms-blue font-semibold"
                  labelPlacement="outside"
                  placeholder="Select dbs type"
                  selectedKeys={
                    field.value ? new Set([field.value]) : new Set()
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
                >
                  {dbsTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.value}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />
            <Input
              radius="sm"
              label="Reference Number"
              labelPlacement="outside"
              placeholder="Enter Reference Number"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("dbsReferenceNumber")}
            />
            <Input
              radius="sm"
              label="Nationality"
              labelPlacement="outside"
              placeholder="Enter Nationality"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("dbsNationality")}
            />
            <Controller
              name="dbsIssueDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  radius="sm"
                  className="text-hrms-blue font-semibold"
                  label="Issue Date"
                  labelPlacement="outside"
                  onChange={(date) =>
                    field.onChange(
                      date
                        ? format(
                            new Date(date.year, date.month - 1, date.day),
                            "dd-MM-yyyy"
                          )
                        : ""
                    )
                  }
                />
              )}
            />
            <Controller
              name="dbsExpiryDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  radius="sm"
                  className="text-hrms-blue font-semibold"
                  label="Expiry Date"
                  labelPlacement="outside"
                  onChange={(date) =>
                    field.onChange(
                      date
                        ? format(
                            new Date(date.year, date.month - 1, date.day),
                            "dd-MM-yyyy"
                          )
                        : ""
                    )
                  }
                />
              )}
            />
            <Controller
              name="dbsExpiryDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  radius="sm"
                  className="text-hrms-blue font-semibold"
                  label="Expiry Date"
                  labelPlacement="outside"
                  onChange={(date) =>
                    field.onChange(
                      date
                        ? format(
                            new Date(date.year, date.month - 1, date.day),
                            "dd-MM-yyyy"
                          )
                        : ""
                    )
                  }
                />
              )}
            />
            <Input
              radius="sm"
              label="DBS Document"
              labelPlacement="outside"
              type="file"
              className="text-hrms-blue font-semibold"
              {...register("dbsDocument")}
            />
            <Input
              radius="sm"
              label="EUSS/Time Limit Remarks"
              labelPlacement="outside"
              placeholder="Enter remarks"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("dbsRemarks")}
            />
            <Controller
              name="isCurrentDbsStatus"
              control={control}
              render={({ field }) => (
                <Select
                  radius="sm"
                  label="Is this your current status?"
                  className="text-hrms-blue font-semibold"
                  labelPlacement="outside"
                  placeholder="Select Yes or No"
                  selectedKeys={
                    field.value ? new Set([field.value]) : new Set()
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
                >
                  <SelectItem key="Yes" value="Yes">
                    Yes
                  </SelectItem>
                  <SelectItem key="No" value="No">
                    No
                  </SelectItem>
                </Select>
              )}
            />
          </div>
        </div>

        {/* National ID Details */}
        <div className="pt-5">
          <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
            National ID Details
          </h1>
          <div className="grid grid-cols-4 gap-5 pt-5">
            <Input
              radius="sm"
              label="National ID Number"
              labelPlacement="outside"
              placeholder="Enter national id number"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("nationalIdNumber")}
            />
            <Controller
              name="nationalIdNationality"
              control={control}
              render={({ field }) => (
                <Select
                  radius="sm"
                  label="Nationality"
                  className="text-hrms-blue font-semibold"
                  labelPlacement="outside"
                  placeholder="Select nationality"
                  selectedKeys={
                    field.value ? new Set([field.value]) : new Set()
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
                >
                  {nationalities.map((nationality) => (
                    <SelectItem
                      key={nationality.value}
                      value={nationality.value}
                    >
                      {nationality.value}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />
            <Controller
              name="nationalIdCountryOfResidence"
              control={control}
              render={({ field }) => (
                <Select
                  radius="sm"
                  label="Country of Residence"
                  className="text-hrms-blue font-semibold"
                  labelPlacement="outside"
                  placeholder="Select country"
                  selectedKeys={
                    field.value ? new Set([field.value]) : new Set()
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
                >
                  {countries.map((country) => (
                    <SelectItem key={country.value} value={country.value}>
                      {country.value}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />

            <Controller
              name="nationalIdIssueDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  radius="sm"
                  className="text-hrms-blue font-semibold"
                  label="Issue Date"
                  labelPlacement="outside"
                  onChange={(date) =>
                    field.onChange(
                      date
                        ? format(
                            new Date(date.year, date.month - 1, date.day),
                            "dd-MM-yyyy"
                          )
                        : ""
                    )
                  }
                />
              )}
            />

            <Controller
              name="nationalIdExpiryDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  radius="sm"
                  className="text-hrms-blue font-semibold"
                  label="Visa Expiry Date"
                  labelPlacement="outside"
                  onChange={(date) =>
                    field.onChange(
                      date
                        ? format(
                            new Date(date.year, date.month - 1, date.day),
                            "dd-MM-yyyy"
                          )
                        : ""
                    )
                  }
                />
              )}
            />

            <Controller
              name="nationalIdEligibleReviewDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  radius="sm"
                  className="text-hrms-blue font-semibold"
                  label="Visa Eligible Review Date"
                  labelPlacement="outside"
                  onChange={(date) =>
                    field.onChange(
                      date
                        ? format(
                            new Date(date.year, date.month - 1, date.day),
                            "dd-MM-yyyy"
                          )
                        : ""
                    )
                  }
                />
              )}
            />
            <Input
              radius="sm"
              label="National Id Document Front Side"
              labelPlacement="outside"
              type="file"
              className="text-hrms-blue font-semibold"
              {...register("nationalIdDocumentFrontSide")}
            />
            <Input
              radius="sm"
              label="National Id Document Back Side"
              labelPlacement="outside"
              type="file"
              className="text-hrms-blue font-semibold"
              {...register("nationalIdDocumentBackSide")}
            />
            <Input
              radius="sm"
              label="National Id Remarks"
              labelPlacement="outside"
              placeholder="Enter visa remarks"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("nationalIdRemarks")}
            />
            <Controller
              name="isCurrentNationalIdStatus"
              control={control}
              render={({ field }) => (
                <Select
                  radius="sm"
                  label="Is this your current status?"
                  className="text-hrms-blue font-semibold"
                  labelPlacement="outside"
                  placeholder="Select Yes or No"
                  selectedKeys={
                    field.value ? new Set([field.value]) : new Set()
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
                >
                  <SelectItem key="Yes" value="Yes">
                    Yes
                  </SelectItem>
                  <SelectItem key="No" value="No">
                    No
                  </SelectItem>
                </Select>
              )}
            />
          </div>
        </div>

        {/* other Details */}
        <div className="pt-5">
          <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
            Other Details
          </h1>
          <div className="grid grid-cols-4 gap-5 pt-5">
            <Input
              radius="sm"
              label="Document name."
              labelPlacement="outside"
              placeholder="Enter Document name."
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("documentName")}
            />
            <Input
              radius="sm"
              label="Document reference number."
              labelPlacement="outside"
              placeholder="Enter document reference number."
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("documentReferenceNumber")}
            />
            <Controller
              name="nationalIdNationality"
              control={control}
              render={({ field }) => (
                <Select
                  radius="sm"
                  label="Nationality"
                  className="text-hrms-blue font-semibold"
                  labelPlacement="outside"
                  placeholder="Select nationality"
                  selectedKeys={
                    field.value ? new Set([field.value]) : new Set()
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
                >
                  {nationalities.map((nationality) => (
                    <SelectItem
                      key={nationality.value}
                      value={nationality.value}
                    >
                      {nationality.value}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />

            <Controller
              name="issueDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  radius="sm"
                  className="text-hrms-blue font-semibold"
                  label="Issue Date"
                  labelPlacement="outside"
                  onChange={(date) =>
                    field.onChange(
                      date
                        ? format(
                            new Date(date.year, date.month - 1, date.day),
                            "dd-MM-yyyy"
                          )
                        : ""
                    )
                  }
                />
              )}
            />

            <Controller
              name="expiryDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  radius="sm"
                  className="text-hrms-blue font-semibold"
                  label="Expiry Date"
                  labelPlacement="outside"
                  onChange={(date) =>
                    field.onChange(
                      date
                        ? format(
                            new Date(date.year, date.month - 1, date.day),
                            "dd-MM-yyyy"
                          )
                        : ""
                    )
                  }
                />
              )}
            />

            <Controller
              name="eligibleReviewDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  radius="sm"
                  className="text-hrms-blue font-semibold"
                  label="Eligible Review Date"
                  labelPlacement="outside"
                  onChange={(date) =>
                    field.onChange(
                      date
                        ? format(
                            new Date(date.year, date.month - 1, date.day),
                            "dd-MM-yyyy"
                          )
                        : ""
                    )
                  }
                />
              )}
            />

            <Input
              radius="sm"
              label="Upload Document"
              labelPlacement="outside"
              type="file"
              className="text-hrms-blue font-semibold"
              {...register("uploadDocument")}
            />

            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <RadioGroup
                  label="Is this your current status?"
                  orientation="horizontal"
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <Radio value="yes">Yes</Radio>
                  <Radio value="no">No</Radio>
                </RadioGroup>
              )}
            />

            <Input
              radius="sm"
              label="Remarks"
              labelPlacement="outside"
              placeholder="Enter remarks"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("remarks")}
            />
          </div>
        </div>

        {/* Pay Details */}
        <div className="pt-5">
          <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
            Pay Details
          </h1>
          <div className="grid grid-cols-3 gap-5 pt-5">
            <Controller
              name="payGroup"
              control={control}
              render={({ field }) => (
                <Select
                  radius="sm"
                  label="Pay Group"
                  className="text-hrms-blue font-semibold"
                  labelPlacement="outside"
                  placeholder="Select group"
                  selectedKeys={
                    field.value ? new Set([field.value]) : new Set()
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
                >
                  {payGroups.map((payGroup) => (
                    <SelectItem key={payGroup.value} value={payGroup.value}>
                      {payGroup.value}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />
            <Controller
              name="wedgesPaymode"
              control={control}
              render={({ field }) => (
                <Select
                  radius="sm"
                  label="Wedges pay mode"
                  className="text-hrms-blue font-semibold"
                  labelPlacement="outside"
                  placeholder="Select Wedges pay mode"
                  selectedKeys={
                    field.value ? new Set([field.value]) : new Set()
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
                >
                  {wedgesPaymodes.map((wedgesPaymode) => (
                    <SelectItem
                      key={wedgesPaymode.value}
                      value={wedgesPaymode.value}
                    >
                      {wedgesPaymode.value}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />
            <Controller
              name="annualPay"
              control={control}
              render={({ field }) => (
                <Select
                  radius="sm"
                  label="Annual Pay"
                  className="text-hrms-blue font-semibold"
                  labelPlacement="outside"
                  placeholder="Select Annual Pay"
                  selectedKeys={
                    field.value ? new Set([field.value]) : new Set()
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
                >
                  {annualPays.map((annualPay) => (
                    <SelectItem key={annualPay.value} value={annualPay.value}>
                      {annualPay.value}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />
            <Controller
              name="paymentType"
              control={control}
              render={({ field }) => (
                <Select
                  radius="sm"
                  label="Payment Type"
                  className="text-hrms-blue font-semibold"
                  labelPlacement="outside"
                  placeholder="Select Payment Type"
                  selectedKeys={
                    field.value ? new Set([field.value]) : new Set()
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
                >
                  {paymentTypes.map((paymentType) => (
                    <SelectItem
                      key={paymentType.value}
                      value={paymentType.value}
                    >
                      {paymentType.value}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />

            <Input
              radius="sm"
              label="Basic / Daily Wedges"
              labelPlacement="outside"
              placeholder="Enter Basic / Daily Wedges."
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("basicDailyWedges")}
            />
            <Input
              radius="sm"
              label="Min. Working Hour."
              labelPlacement="outside"
              placeholder="Enter Min. Working Hour."
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("minWorkingHour")}
            />
            <Input
              radius="sm"
              label="Rate."
              labelPlacement="outside"
              placeholder="Enter Rate."
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("rate")}
            />
            <Controller
              name="taxCode"
              control={control}
              render={({ field }) => (
                <Select
                  radius="sm"
                  label="Tax Code"
                  className="text-hrms-blue font-semibold"
                  labelPlacement="outside"
                  placeholder="Select Tax Code"
                  selectedKeys={
                    field.value ? new Set([field.value]) : new Set()
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
                >
                  {taxCodes.map((taxCode) => (
                    <SelectItem key={taxCode.value} value={taxCode.value}>
                      {taxCode.value}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />

            <Input
              radius="sm"
              label="Tax Reference"
              labelPlacement="outside"
              type="file"
              className="text-hrms-blue font-semibold"
              {...register("taxReference")}
            />

            <Input
              radius="sm"
              label="Remarks"
              labelPlacement="outside"
              placeholder="Tax Percentage"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("taxPercentage")}
            />
            <Controller
              name="paymentMode"
              control={control}
              render={({ field }) => (
                <Select
                  radius="sm"
                  label="Payment Mode"
                  className="text-hrms-blue font-semibold"
                  labelPlacement="outside"
                  placeholder="Select Payment Mode"
                  selectedKeys={
                    field.value ? new Set([field.value]) : new Set()
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
                >
                  {paymentModes.map((paymentMode) => (
                    <SelectItem
                      key={paymentMode.value}
                      value={paymentMode.value}
                    >
                      {paymentMode.value}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />
            <Controller
              name="bankName"
              control={control}
              render={({ field }) => (
                <Select
                  radius="sm"
                  label="Bank Name"
                  className="text-hrms-blue font-semibold"
                  labelPlacement="outside"
                  placeholder="Select Bank Name"
                  selectedKeys={
                    field.value ? new Set([field.value]) : new Set()
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
                >
                  {bankNames.map((bankName) => (
                    <SelectItem key={bankName.value} value={bankName.value}>
                      {bankName.value}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />
            <Input
              radius="sm"
              label="Branch Name"
              labelPlacement="outside"
              placeholder="Enter Branch Name"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("branchName")}
            />
            <Input
              radius="sm"
              label="Account No"
              labelPlacement="outside"
              placeholder="Account No"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("accountNo")}
            />
            <Input
              radius="sm"
              label="Sort Code"
              labelPlacement="outside"
              placeholder="Enter Sort Code"
              type="text"
              className="text-hrms-blue font-semibold"
              {...register("sortCode")}
            />

            <Controller
              name="paymentCurrency"
              control={control}
              render={({ field }) => (
                <Select
                  radius="sm"
                  label="Payment Currency"
                  className="text-hrms-blue font-semibold"
                  labelPlacement="outside"
                  placeholder="Select Payment Currency"
                  selectedKeys={
                    field.value ? new Set([field.value]) : new Set()
                  } // Ensure proper binding
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys)[0])
                  } // Extract single value from Set
                >
                  {paymentCurrencies.map((paymentCurrency) => (
                    <SelectItem
                      key={paymentCurrency.value}
                      value={paymentCurrency.value}
                    >
                      {paymentCurrency.value}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />
          </div>
        </div>

        {/* other Details */}
        <div className="pt-5">
          <h1 className="text-xl font-medium pb-2 border-b border-hrms-blue-light">
            Pay Structure
          </h1>
          <div className="grid grid-cols-1 gap-5 pt-5">
            <Controller
              name="taxables"
              control={control}
              render={({ field }) => (
                <RadioGroup
                  label="Payment (Taxable)"
                  orientation="horizontal"
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  {taxables.map((mode) => (
                    <Radio key={mode.value} value={mode.value}>
                      {mode.value}
                    </Radio>
                  ))}
                </RadioGroup>
              )}
            />
            <Controller
              name="deductio"
              control={control}
              render={({ field }) => (
                <RadioGroup
                  label="Deductio"
                  orientation="horizontal"
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  {deductions.map((mode) => (
                    <Radio key={mode.value} value={mode.value}>
                      {mode.value}
                    </Radio>
                  ))}
                </RadioGroup>
              )}
            />
          </div>
        </div>

        {/* submit button */}
        <div className="flex justify-between items-center pt-5 pb-10">
          <Button
            className="bg-hrms-blue text-white text-lg font-semibold mt-4"
            type="submit"
          >
            Submit
          </Button>
          <h5 className="text-lg font-medium text-red-600">
            (*) Marked fields are mandatory fields
          </h5>
        </div>
      </form>
    </main>
  );
};

export default AddDocuments;
